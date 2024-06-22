import { MainProvider } from "@/lib/context/main.provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo List",
  description: "This is a Next 14 Todo List test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MainProvider>
        <body>{children}</body>
      </MainProvider>
    </html>
  );
}
