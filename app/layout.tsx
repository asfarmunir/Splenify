import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" sticky top-0 z-50 w-full ">
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
