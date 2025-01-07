import { ReactNode } from "react";
import MainLayout from "./components/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Forenzička ekspertiza",
  description: "Portfolio forenzičkog eksperta za mehaniku",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
