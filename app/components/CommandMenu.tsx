"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { navigation, profile } from "../data";

type Command = {
  label: string;
  hint: string;
  href: string;
  external?: boolean;
};

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      ...navigation.map((item) => ({
        label: item.label,
        hint: "Jump to section",
        href: item.href
      })),
      { label: "Resume", hint: "Open resume page", href: profile.resume },
      { label: "GitHub", hint: profile.handle, href: profile.github, external: true },
      { label: "LinkedIn", hint: "Professional profile", href: profile.linkedin, external: true },
      { label: "Email", hint: profile.email, href: `mailto:${profile.email}`, external: true }
    ],
    []
  );

  const filtered = commands.filter((command) => {
    const haystack = `${command.label} ${command.hint}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isCommandKey = event.metaKey || event.ctrlKey;
      if (isCommandKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  return (
    <>
      <button
        className="navCommand"
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Jump
      </button>

      {open ? (
        <div className="commandOverlay" role="presentation" onMouseDown={() => setOpen(false)}>
          <div
            className="commandDialog"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <label className="srOnly" htmlFor="command-search">
              Search portfolio sections
            </label>
            <input
              ref={inputRef}
              id="command-search"
              className="commandInput"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search systems, projects, architecture..."
            />
            <div className="commandList">
              {filtered.length > 0 ? (
                filtered.map((command) => (
                  <a
                    className="commandItem"
                    href={command.href}
                    key={`${command.label}-${command.href}`}
                    target={command.external ? "_blank" : undefined}
                    rel={command.external ? "noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span>{command.label}</span>
                    <small>{command.hint}</small>
                  </a>
                ))
              ) : (
                <p className="commandEmpty">No matching destination.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
