import { Suspense } from "react";
import type { Metadata } from "next";
// 方案二: 使用 @ant-design/nextjs-registry 方式集成 Antd
// import Providers from "components/themes/Second";

// 方案三: 使用 antd-style 方式集成 Antd
// import Providers from "components/themes/Third";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
// 方案一: 使用 @ant-design/cssinjs 方式集成 Antd
import Providers from "components/themes/First";
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
            <nav className="flex flex-row-reverse items-center gap-4 py-6">
              <a
                href="https://github.com/liaoyio/nextjs-antd-dark-mode-error"
                target="_blank"
              >
                <GitHubLogoIcon className="size-5 hover:opacity-70" />
              </a>
              <ThemeSwitcher />
            </nav>
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
