import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

// Если вы используете React, раскомментируйте следующую строку:
// import react from '@vitejs/plugin-react';

export default defineConfig({
  // Плагины
  plugins: [
    // react(), // Раскомментируйте, если используете React
  ],

  // Настройки сервера разработки
  server: {
    port: 3000, // Порт для локального сервера
    open: true, // Автоматически открывать браузер при запуске
    host: 'localhost', // Хост для сервера
  },

  // Настройки сборки
  build: {
    outDir: 'dist', // Выходная директория для production-сборки
    assetsDir: 'assets', // Папка для статических файлов
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', // Имена для CSS и других ресурсов
        entryFileNames: 'js/[name].[hash].js', // Имена для JS-файлов
      },
    },
  },

  // Настройки CSS и PostCSS
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // Добавляем Autoprefixer
      ],
    },

  },
});