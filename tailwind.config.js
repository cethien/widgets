/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx,svg}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/container-queries')],
};
