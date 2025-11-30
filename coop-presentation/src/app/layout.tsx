import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "COOP Web App | ระบบบริหารงานสหกรณ์บน Cloud",
  description: "ระบบบริหารจัดการงานสหกรณ์แบบดิจิทัล ด้วยเทคโนโลยี Cloud และ Mobile Application รองรับสหกรณ์ทั้ง 7 ประเภท มากกว่า 11.13 ล้านคน",
  keywords: ["สหกรณ์", "ระบบบริหารงาน", "Cloud", "Mobile Application", "COOP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
