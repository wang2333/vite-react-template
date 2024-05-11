import react from '@vitejs/plugin-react'
import * as path from 'path'
import { resolve } from 'path'
// import Analyze from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { defineConfig, loadEnv } from 'vite'
import Checker from 'vite-plugin-checker'
import EslintPlugin from 'vite-plugin-eslint'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    },
    server: {
      open: true,
      host: true,
      port: 3001,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      react(),
      UnoCSS(),
      EslintPlugin(),
      // Analyze(),
      nodePolyfills(),
      Checker({ typescript: true }),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections: {
          'fisand-icons': FileSystemIconLoader(`${resolve(__dirname, 'src/assets/icons')}/`, (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
        },
      }),
      // Pages({
      //   dirs: [{ dir: 'src/pages', baseRoute: env.BASE || '' }],
      //   exclude: ['**/[A-Z]*.tsx'],
      //   importMode: 'async',
      // }),
      AutoImport({
        imports: ['react'],
        dts: './src/auto-imports.d.ts',
        resolvers: [
          IconsResolver({
            componentPrefix: 'Icon',
          }),
        ],
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // 将 React 相关库打包成单独的 chunk 中
            'react-vendor': ['react', 'react-router-dom', 'react-dom'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react-dom'],
    },
  }
})
