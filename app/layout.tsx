import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrey Patel — Software Engineer",
  description:
    "Shrey Patel is a Software Engineer and CS student building full-stack web applications, ML systems, and developer tools. Open to roles across all areas of software engineering.",
  keywords: [
    "Shrey Patel","Software Engineer","Full Stack Developer",
    "Machine Learning","React","Python","FastAPI","Node.js",
    "Portfolio","Ahmedabad","Computer Science",
  ],
  authors: [{ name: "Shrey Patel" }],
  creator: "Shrey Patel",
  openGraph: {
    type: "website",
    title: "Shrey Patel — Software Engineer",
    description: "Building full-stack applications and ML systems. Open to all software engineering roles.",
    siteName: "Shrey Patel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrey Patel — Software Engineer",
    description: "Building full-stack applications and ML systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
