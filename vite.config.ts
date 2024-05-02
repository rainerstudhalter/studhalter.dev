import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { paraglide } from "@inlang/paraglide-sveltekit/vite"
import UnoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [
		UnoCSS(),
		sveltekit(),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
	]
});