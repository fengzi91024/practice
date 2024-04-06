import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
    // 全局token 设置主题
    theme={{
      token: {
        // 主题颜色  
        //文字颜色 黑色
        colorText:"rgba(0,0,0,88)",
        // 边框弧度
        borderRadius: 3,
        // 派生变量，影响范围小
        colorBgContainer: '#ffff'
      }
    }}
  >
     <Layout>
      <Component {...pageProps} />
    </Layout> 
  </ConfigProvider>
   
  );
}
