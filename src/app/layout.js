import NavbarItemList from "@/components/shared/NavbarItemLlist";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-900"
        }
      >
        <NavbarItemList />
        <div className=" w-screen h-screen">{children}</div>
      </body>
    </html>
  );
}
