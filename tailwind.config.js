/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx,svg}'],
	theme: {
		extend: {
			screens: {
				small: { raw: '(max-height: 125px)' },
			},
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
};
