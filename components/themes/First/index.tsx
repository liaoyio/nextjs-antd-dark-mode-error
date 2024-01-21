import AntdRegistry from "./antd-registry";
import NextThemesProviders from "../next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextThemesProviders>
        <AntdRegistry>{children}</AntdRegistry>
      </NextThemesProviders>
    </>
  );
}
