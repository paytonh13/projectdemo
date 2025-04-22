import "./globals.css";
import "primeicons/primeicons.css";
import { Roboto } from "next/font/google";
import { PrimeUIProvider } from "@providers/PrimeUIProvider";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} h-screen bg-background-100 text-neutral-900 min-w-[1280px]`}
      >
        <PrimeUIProvider>{children}</PrimeUIProvider>
      </body>
    </html>
  );
}
