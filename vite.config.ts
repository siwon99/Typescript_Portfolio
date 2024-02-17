import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import postcssUrl from 'postcss-url'; // require 문 대신 import 문 사용

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssUrl({ 
          url: 'inline', 
          basePath: './public' // 이미지가 있는 디렉토리를 기준으로 설정
        })
      ]
    }
  }
});
