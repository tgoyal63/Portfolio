import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tushar.codes"),
  title: {
    default: "Tushar Goyal - Backend Engineer",
    template: "%s | Tushar Goyal"
  },
  description:
    "Backend engineer focused on scalable APIs, distributed systems, production infrastructure, observability, and real-time backend workflows.",
  applicationName: "Tushar Goyal Portfolio",
  authors: [{ name: "Tushar Goyal", url: "https://tushar.codes" }],
  creator: "Tushar Goyal",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "Scalable APIs",
    "Production Engineering",
    "Infrastructure",
    "Node.js",
    "Python",
    "Redis",
    "Observability"
  ],
  openGraph: {
    type: "website",
    url: "https://tushar.codes",
    title: "Tushar Goyal - Backend Engineer",
    description:
      "Backend engineer building scalable systems, distributed infrastructure, and production APIs.",
    siteName: "Tushar Goyal",
    images: [
      {
        url: "/assets/projects/aui-bot.png",
        width: 1200,
        height: 630,
        alt: "Backend engineering portfolio for Tushar Goyal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Goyal - Backend Engineer",
    description:
      "Scalable APIs, distributed infrastructure, real-time systems, and production backend workflows.",
    images: ["/assets/projects/aui-bot.png"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
