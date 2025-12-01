import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });


export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>YouTec</title>
        <meta name="description" content="Inovação, performance e design para seu produto digital. Construímos experiências que conectam." />
        <link rel="icon" href="/images/logo/youtec.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/youtec.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/youtec.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/youtec.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4329166318141941"
          crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-4329166318141941"></meta>
      </head>
      <body className={inter.className}>
        <NextTopLoader />
        <AuthDialogProvider>
          <SessionProviderComp session={session}>
            <ThemeProvider
              attribute="class"
              enableSystem={true}
              defaultTheme="system"
            >
              <Aoscompo>
                <Header />
                {children}
                <Footer />
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AuthDialogProvider>
      </body>
    </html>
  );
}