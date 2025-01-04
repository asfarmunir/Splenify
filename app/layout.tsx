import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Splenify",
  description: "Your Ultimate Software Solution Partner",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <NextTopLoader
          color="pink"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          showSpinner={false}
          crawl={true}
          easing="ease"
          speed={200}
          shadow="0 0 5px #2299DD,0 0 5px #2299DD"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" sticky top-0 z-50 w-full flex justify-center ">
            <Navbar />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
