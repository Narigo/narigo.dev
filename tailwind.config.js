/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: 'rgb(var(--color-primary-light) / <alpha-value>)',
					DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
					dark: 'rgb(var(--color-primary-dark) / <alpha-value>)'
				}
			}
		}
	},
	plugins: []
};
