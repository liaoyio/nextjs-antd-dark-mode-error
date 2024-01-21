"use client";

import { useEffect, useMemo, useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, theme } from "antd";

import "antd/dist/reset.css";

import { useAntdTheme } from "@/components/themes/store";

const AntdStyledComponentsRegistry: FC<PropsWithChildren> = ({ children }) => {
  const isInsert = useRef(false);
  const cache = useMemo(() => createCache(), []);

  useServerInsertedHTML(() => {
    if (isInsert.current) {
      return;
    }
    isInsert.current = true;
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });

  return (
    <StyleProvider cache={cache} hashPriority="high">
      {children}
    </StyleProvider>
  );
};

const AntdConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  const themeMode = useAntdTheme((state) => state.themeMode);
  const setAntdTheme = useAntdTheme((state) => state.setAntdTheme);

  useEffect(() => {
    setAntdTheme(themeMode);
  }, [themeMode]);

  return (
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
  );
};

const AntdRegistry: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdStyledComponentsRegistry>
      <AntdConfigProvider>{children}</AntdConfigProvider>
    </AntdStyledComponentsRegistry>
  );
};

export default AntdRegistry;
