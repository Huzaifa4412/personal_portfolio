import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Connection from "@/components/Connection";
import ProjectsProvider from "@/context/projectsContext";

const FiraCode = Fira_Code({
  variable: "--font-Fira-Code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio.",
  description: "Hi, I'm Huzaifa . I'm a Web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${FiraCode.className} antialiased`}
      >
        <Navbar />
        <Connection />
        <ProjectsProvider>{children}</ProjectsProvider>
      </body>
    </html>
  );
}
