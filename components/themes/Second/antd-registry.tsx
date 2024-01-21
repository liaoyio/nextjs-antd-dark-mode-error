"use client"
import { ConfigProvider, theme } from "antd";
import { useAntdTheme } from "@/components/themes/store";

export default function AntdConfigProvider({ children }: { children: React.ReactNode }) {
  const themeMode = useAntdTheme((state) => state.themeMode);

  return (
    <>
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
    </>
  );
}
