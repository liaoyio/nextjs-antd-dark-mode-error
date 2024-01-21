"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, Dropdown } from "antd";
import { useTheme } from "next-themes";

import { useAntdTheme } from "@/components/themes/store";

type ThemeMode = "dark" | "light";

export default function ThemeSwitcher({ className = "" }) {
  const antdThemeMode = useAntdTheme((state) => state.themeMode);
  const setAntdTheme = useAntdTheme((state) => state.setAntdTheme);
  const { theme, setTheme } = useTheme();

  const setThemeMode = (mode: ThemeMode) => {
    setAntdTheme(mode);
    setTheme(mode);
  };

  return (
    <div className={className}>
      <Dropdown
        menu={{
          selectedKeys: [antdThemeMode],
          onClick: (item) => setThemeMode(item.key as ThemeMode),
          items: [
            { key: "light", icon: <SunIcon />, label: "明亮模式" },
            { key: "dark", icon: <MoonIcon />, label: "暗黑模式" },
          ],
        }}
      >
        <Button
          type="text"
          className="!flex items-center"
          icon={theme === "dark" ? <MoonIcon /> : <SunIcon />}
        >
          {theme === "dark" ? "暗黑模式" : "明亮模式"}
        </Button>
      </Dropdown>
    </div>
  );
}
