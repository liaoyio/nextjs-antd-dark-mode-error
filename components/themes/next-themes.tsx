"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

type Props = {
  theme?: ThemeProviderProps;
  children: ReactNode;
};

/** next-themes Providers */
export default function NextThemesProviders({ children, theme }: Props) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        {...theme}
      >
        {children}
      </ThemeProvider>
    </>
  );
}
