'use strict';

var artists = document.getElementById('artists');
var title = document.getElementById('title');

import * as fetcher from './dataFetcher.js';

async function setData() {
	var data = await fetcher.getData();
	if (data.status === 'playing') {
		artists.innerText = data.artists.join(', ');
		title.innerText = data.title;
	}
}

async function update() {
	try {
		await setData();
	} catch (err) {
		console.log(err);
	}
}

export async function run() {
	try {
		// update every 1 second
		setInterval(update, 1000);
	} catch (error) {
		console.error(error);
	}
}
