import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


export default {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$data: 'src/data'
		}
	},
	preprocess: vitePreprocess()
};
