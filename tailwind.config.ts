import typographyPlugin from '@tailwindcss/typography';
import { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				announce: 'announce 2000ms infinite ease',
				'pulse-fast': 'pulse 800ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
				shake: 'shake 100ms infinite alternate'
			},
			colors: {
				body: {
					DEFAULT: 'rgb(0 0 0 / <alpha-value>)'
				},
				primary: {
					light: 'rgb(var(--color-primary-light) / <alpha-value>)',
					DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
					dark: 'rgb(var(--color-primary-dark) / <alpha-value>)'
				}
			},
			boxShadow: {
				box: '0.25rem 0.25rem 0 #555'
			},
			keyframes: {
				announce: {
					'0%, 50%, 100%': {
						rotate: '0deg',
						scale: '1'
					},
					'25%': {
						rotate: '-2deg',
						scale: '1.05'
					},
					'75%': {
						rotate: '2deg',
						scale: '1.05'
					}
				},
				shake: {
					'0%,100%': {
						transform: 'translate(-2px, -1px)'
					},
					'20%,80%': {
						transform: 'translate(1px, 2px)'
					},
					'40%': {
						transform: 'translate(2px, 1px)'
					},
					'60%': {
						transform: 'translate(-1px, -1px)'
					}
				}
			}
		}
	},
	plugins: [typographyPlugin]
} satisfies Config;
