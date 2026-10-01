import "./globals.css";

export const metadata = {
  title: "InfinityFX — Limitless Design",
  description:
    "Sustainable clothing. Limitless design. Premium apparel with ethical production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}