'use strict';

const tunaServer = 'http://localhost:1608';

export async function isTunaServerReachable() {
	try {
		var res = await fetch(tunaServer);
		var status = await res.status;
		return (status >= 200 && status < 300) || status === 304;
	} catch (error) {
		return false;
	}
}

async function fetchData() {
	var res = await fetch(tunaServer);
	var data = await res.json();
	return data;
}

export async function isTunaStatusPlaying() {
	if (isTunaServerReachable()) {
		var data = await fetchData();
		return data.status === 'playing';
	}
}

const titleRegex = /\((feat.|ft.|featuring|with|from)(.*)\)/i;
export async function getDisplayData() {
	var data = await fetchData();
	return {
		title: data.title.replace(titleRegex, ''),
		artists: data.artists,
		cover_url: data.cover_path,
	};
}
