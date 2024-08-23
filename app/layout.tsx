import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dochub",
  description: "The connected workstation for notes",
  icons:{
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/light.png",
        href: "/light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/dark.png",
        href: "/dark.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="system"
            disableTransitionOnChange
            storageKey="dochub-theme"
          >
            <Toaster position="bottom-center"/>
            <ModalProvider/>
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
        
      </body> 
    </html>
  );
}
