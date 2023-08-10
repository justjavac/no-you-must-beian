import "./globals.css";
import "xterm/css/xterm.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "请备案",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
