/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'pastel-green': '#B8E6C9',
				'pastel-beige': '#F5E6D3',
				'pastel-pink': '#FFD7E0',
				'pastel-blue': '#C9E4F0',
				'pastel-purple': '#E5D4ED',
			},
		},
	},
	plugins: [],
}
