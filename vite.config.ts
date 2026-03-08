import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main:         path.resolve(__dirname, 'index.html'),
          implante:     path.resolve(__dirname, 'implante-dentario-maringa.html'),
          clareamento:  path.resolve(__dirname, 'clareamento-dental-maringa.html'),
          harmonizacao: path.resolve(__dirname, 'harmonizacao-orofacial-maringa.html'),
          canal:        path.resolve(__dirname, 'tratamento-de-canal-maringa.html'),
          ortodontia:   path.resolve(__dirname, 'ortodontista-maringa.html'),
          proteses:     path.resolve(__dirname, 'proteses-dentarias-maringa.html'),
          lentes:       path.resolve(__dirname, 'lentes-de-contato-dental-maringa.html'),
          estetica:     path.resolve(__dirname, 'odontologia-estetica-maringa.html'),
          obrigado:     path.resolve(__dirname, 'obrigado.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});