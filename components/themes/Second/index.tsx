
import { AntdRegistry } from '@ant-design/nextjs-registry';
import NextThemesProviders from "../next-themes";
import AntdConfigProvider from './antd-registry'
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextThemesProviders>
        <AntdRegistry>
          <AntdConfigProvider>
            {children}
          </AntdConfigProvider>
        </AntdRegistry>
      </NextThemesProviders>
    </>
  );
}
