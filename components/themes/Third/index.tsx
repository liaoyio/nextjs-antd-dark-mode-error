import NextThemesProviders from "../next-themes";
import AntdRegistry from "./antd-registry";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextThemesProviders>
        <AntdRegistry>{children}</AntdRegistry>
      </NextThemesProviders>
    </>
  );
}
