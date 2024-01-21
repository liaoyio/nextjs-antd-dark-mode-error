import { create } from "zustand";
import { getItem, removeItem, setItem, StorageEnum } from "@/lib/utils/storage";

type ThemeMode = "light" | "dark";

type SettingStore = {
  themeMode: ThemeMode;
  setAntdTheme: (mode: ThemeMode) => void;
  clearAntdTheme: () => void;
};

export const useAntdTheme = create<SettingStore>((set) => ({
  themeMode: getItem<ThemeMode>(StorageEnum.AntdThemeMode) || "light",
  setAntdTheme: (themeMode) => {
    set({ themeMode });
    setItem(StorageEnum.AntdThemeMode, themeMode);
  },
  clearAntdTheme() {
    removeItem(StorageEnum.AntdThemeMode);
  },
}));

