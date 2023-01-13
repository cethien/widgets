'use strict';
var app = document.body;
var artists = document.getElementById('artists');
var title = document.getElementById('title');

import * as dataService from './dataService.js';

async function setData(data) {
	artists.innerText = data.artists.join(', ');
	title.innerText = data.title;
}

async function update() {
	var data = await dataService.getDisplayData();
	console.log(data);
	var isPlaying = dataService.isTunaStatusPlaying();
	var appVisibility = isPlaying ? 'visible' : 'hidden';
	app.style.visibility = appVisibility;
	if (isPlaying) {
		await setData(data);
	}
}

export async function run() {
	try {
		var isServerOnline = await dataService.isTunaServerReachable();
		if (isServerOnline) {
			setInterval(update, 1000);
		} else {
			console.log(
				"Tuna Server couldn't be reached. Is the Tuna Server running on http://localhost:1608?"
			);
		}
	} catch (error) {
		console.error(error);
	}
}
