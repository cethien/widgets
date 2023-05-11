/** @type {import('eslint').Linter.Config} */
module.exports = {
	plugins: [require('eslint-plugin-astro')],
	extends: ['prettier', 'plugin:astro/recommended'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			}
		}
	]
}
