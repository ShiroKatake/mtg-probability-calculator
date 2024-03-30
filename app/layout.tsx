import type { Metadata } from "next";

import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-dark-cyan/theme.css";

export const metadata: Metadata = {
  title: "MTG Probability Calculator",
  description:
    "A calculator assistant, providing you with the probability calculations necessary to help you succeed in deck building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
