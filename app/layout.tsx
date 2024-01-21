import { Suspense } from "react";
import type { Metadata } from "next";
// 方案一: 使用 @ant-design/cssinjs 方式集成 Antd
import Providers from "components/themes/First";
// 方案二: 使用 @ant-design/nextjs-registry 方式集成 Antd
// import Providers from "components/themes/Second";

// 方案三: 使用 antd-style 方式集成 Antd
// import Providers from "components/themes/Third";

import { poppins } from "lib/fonts";

import ThemeSwitcher from "@/components/themes/theme-switcher";

import "@/styles/tailwind.css";

import cx from "lib/utils/cx";

import FullSpin from "@/components/ui/spin/spin";

export const metadata: Metadata = {
  title: "Next.js + Antd",
  description: "A starter template for Next.js and Antd",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          poppins.variable,
          "font-poppins container min-h-screen scroll-smooth antialiased"
        )}
      >
        <Suspense fallback={<FullSpin />}>
          <Providers>
            <nav className="flex flex-row-reverse py-6">
              {" "}
              <ThemeSwitcher />{" "}
            </nav>
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
