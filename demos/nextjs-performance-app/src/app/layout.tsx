import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Performance Anti-Patterns",
  description: "Demo project with intentional performance issues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', padding: '2rem' }}>{children}</body>
    </html>
  );
}
