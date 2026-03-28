import type {Metadata} from "next";
import {PrimeReactProvider} from "primereact/api";
import {AppContextProvider} from "@/hooks/useAppContext";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "primeicons/primeicons.css";

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
  const value = {
    hideOverlaysOnDocumentScrolling: true,
  };
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <PrimeReactProvider value={value}>{children}</PrimeReactProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
