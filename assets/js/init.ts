import Alpine from 'alpinejs'

function isDark(): boolean {
	if (localStorage.getItem('darkMode')) {
		return localStorage.getItem('darkMode') === 'true'
	}

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return true
	}

	return false
}

document.addEventListener('alpine:init', () => {
	if (isDark()) {
		document.documentElement.classList.add('dark')
	}

	Alpine.store('darkMode', {
		on: Alpine.$persist(isDark()).as('darkMode'),
		get: isDark(),
		toggle() {
			this.on = !this.on

			if (this.on) {
				document.documentElement.classList.add('dark')
			}

			if (!this.on) {
				document.documentElement.classList.remove('dark')
			}
		}
	})
})
