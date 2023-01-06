'use strict';

const titleRegex = /\((feat.|ft.|featuring|with|from)(.*)\)/i;

export async function getData() {
	var res = await fetch('http://localhost:1608');
	var data = await res.json();
	return {
		status: data.status,
		title: data.title.replace(titleRegex, ''),
		artists: data.artists,
		cover_url: data.cover_path,
	};
}
