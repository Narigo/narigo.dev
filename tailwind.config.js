/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				announce: 'announce 2000ms infinite ease'
			},
			colors: {
				primary: {
					light: 'rgb(var(--color-primary-light) / <alpha-value>)',
					DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
					dark: 'rgb(var(--color-primary-dark) / <alpha-value>)'
				}
			},
			keyframes: {
				announce: {
					'0%, 50%, 100%': {
						rotate: '0deg',
						scale: 1
					},
					'25%': {
						rotate: '-2deg',
						scale: 1.05
					},
					'75%': {
						rotate: '2deg',
						scale: 1.05
					}
				}
			}
		}
	},
	plugins: []
};
