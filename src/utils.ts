export const titleRegex = /.\((feat\.|ft\.|featuring|with|from)(.*?)\)/i

export type AppInfo = {
	urlBase: string
	fullName: string
}

export const appInfo: AppInfo = {
	urlBase: '/obs-widgets/',
	fullName: 'OBS Widgets'
}
