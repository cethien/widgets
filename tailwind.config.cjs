import { addDynamicIconSelectors } from '@iconify/tailwind'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./layouts/**/*.html', './content/**/*.md'],
	darkMode: 'class',
	plugins: [addDynamicIconSelectors(), typography]
}
