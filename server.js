const fs = require('fs');
const { h } = require('preact');
const express = require('express');
const { join, basename } = require('path');
const compression = require('compression')();
const render = require('preact-render-to-string');
const bundle = require('./build/ssr-build/ssr-bundle');

const App = bundle.default;
const { PORT=3000 } = process.env;
// TODO: improve this?
const RGX = /<div id="app"[^>]*>.*?(?=<script)/i;

const assets = join(__dirname, 'build');
const template = fs.readFileSync('./build/index.html', 'utf8');
const favicon = require('serve-favicon')(join(assets, 'favicon.ico'));

function setHeaders(res, file) {
	let cache = basename(file) === 'sw.js' ? 'private,no-cache' : 'public,max-age=31536000,immutable';
	res.setHeader('Cache-Control', cache); // disable service worker cache
}

express()
	.use(favicon)
	.use(compression)
	.use(express.static(assets, { setHeaders }))
	.get('*', (req, res) => {
		let url = req.url;
		let body = render(h(App, { url }));
		res.send(template.replace(RGX, body));
	})
	.listen(PORT, err => {
		if (err) throw err;
		console.log(`> Running on localhost:${PORT}`);
	});
