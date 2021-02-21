import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import voie from 'vite-plugin-voie';
import ViteComponents from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), voie({extensions: ['vue', 'ts']}), ViteComponents({
    extensions: ['vue', 'svg'],
  })],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src'), },
  }
})
