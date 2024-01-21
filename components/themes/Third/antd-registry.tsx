"use client";

import type { PropsWithChildren } from "react";
import { useRef } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ConfigProvider, theme } from "antd";
import { extractStaticStyle, StyleProvider } from "antd-style";

import { useAntdTheme } from "@/components/themes/store";

const AntdRegistry = ({ children }: PropsWithChildren) => {
  const themeMode = useAntdTheme((state) => state.themeMode);

  const isInsert = useRef(false);

  useServerInsertedHTML(() => {
    if (isInsert.current) return;
    isInsert.current = true;
    return extractStaticStyle().map((item) => item.style);
  });

  return (
    <StyleProvider cache={extractStaticStyle.cache} hashPriority="high">
      <ConfigProvider
        componentSize="large"
        theme={{
          token: {
            colorPrimary: "#10b981",
            fontSizeLG: 14,
            borderRadiusSM: 2,
            borderRadius: 6,
            borderRadiusLG: 8,
          },
          algorithm:
            themeMode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};

export default AntdRegistry;
