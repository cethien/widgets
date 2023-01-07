'use strict';

const tunaServer = 'http://localhost:1608';
const titleRegex = /\((feat.|ft.|featuring|with|from)(.*)\)/i;

export async function isTunaServerReachable() {
	try {
		var res = await fetch(tunaServer);
		var status = await res.status;
		return (status >= 200 && status < 300) || status === 304;
	} catch (error) {
		return false;
	}
}

export async function getData() {
	var res = await fetch(tunaServer);
	var data = await res.json();
	return {
		status: data.status,
		title: data.title.replace(titleRegex, ''),
		artists: data.artists,
		cover_url: data.cover_path,
	};
}
