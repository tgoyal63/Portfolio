import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tushar.codes"),
  title: {
    default: "Tushar Goyal - Backend Engineer",
    template: "%s | Tushar Goyal"
  },
  description:
    "Backend systems portfolio for Tushar Goyal: scalable APIs, event-driven infrastructure, logging platforms, real-time workflows, and production backend services.",
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
    "Observability",
    "Event-driven Architecture",
    "Logging Systems",
    "Infrastructure Dashboard"
  ],
  openGraph: {
    type: "website",
    url: "https://tushar.codes",
    title: "Tushar Goyal - Backend Engineer",
    description:
      "A backend engineering command center covering scalable APIs, distributed infrastructure, event ingestion, logging systems, caching, and production workflows.",
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
      "Backend systems, event-driven infrastructure, logging platforms, caching layers, and production APIs.",
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
