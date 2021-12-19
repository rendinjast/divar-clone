import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactJsx from 'vite-react-jsx';
import reactSvg from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    reactSvg({
      defaultExport: 'component',
    }),
    reactJsx(),
  ],
  root: 'src',
  publicDir: 'public',
});
