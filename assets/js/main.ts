import persist from '@alpinejs/persist'
import Alpine from 'alpinejs'

import htmx from 'htmx.org'

declare global {
	interface Window {
		Alpine: typeof Alpine
		htmx: typeof htmx
	}
}

window.Alpine = Alpine
window.htmx = htmx

Alpine.plugin(persist)
Alpine.start()

import './init'
