import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	onwarn: (warning, handler) => {
		// suppress warnings on `vite dev` and `vite build`; although things still work without this
		if (warning.code === "a11y-click-events-have-key-events") return;
		if (warning.code === "a11y-no-static-element-interactions") return;
		if (warning.code === "a11y-no-noninteractive-element-interactions") return;
		handler(warning);
	},
	kit: {
		adapter: adapter(),
		alias: {
			$paraglide: "./src/paraglide",
		},
	}
};
export default config;