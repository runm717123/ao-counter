import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wyw from '@wyw-in-js/vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		wyw({
			include: ['**/*.{ts,tsx}'],
			babelOptions: {
				presets: ['@babel/preset-typescript', '@babel/preset-react'],
			},
		}),
		tailwindcss(),
	],
	server: {
		port: 3004,
	},
});
