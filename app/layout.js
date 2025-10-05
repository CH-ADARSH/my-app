import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider.jsx";
import { Toaster } from "sonner";
import FloatingShapes from "@/components/floating-shapes";
import Header from "@/components/Header";
import { ConvexClientProvider } from "./ConvexClientProvider.jsx"
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from '@clerk/themes';
const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixxel",
  description: "AI image enhancer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider appearance={{
            baseTheme: shadesOfPurple,
          }}>
            <ConvexClientProvider>

              <Header />
              <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
                <FloatingShapes />
                <Toaster richColors />
                {children}
              </main>

            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>


    </html>

  );
}
