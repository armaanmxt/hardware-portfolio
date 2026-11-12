import type { Metadata } from "next";
import "./globals.css";

const restoreTheme = `
  try {
    if (localStorage.getItem('portfolio-theme') === 'light') {
      document.documentElement.dataset.theme = 'light';
    }
  } catch {}
`;

export const metadata: Metadata = {
  title: "Armaan Mathur — Digital hardware & verification",
  description: "Nanotechnology Engineering at Waterloo. Selected digital hardware and verification projects, OPG and UWASIC experience, and computer architecture projects.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }}/>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

