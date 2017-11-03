# Preact CLI SSR Demo

> A quick demo that illustrates how to add SSR to a Preact CLI app

This demo was built with [`preact-cli`](https://github.com/developit/preact-cli), using the [`default`](https://github.com/preactjs-templates/default) template.

It's powered by an Express server with `gzip` compression... nothing special there.

Because of how `preact-cli` produces the `build` directory, the server must respect static/file requests first. This also means that your `build/index.html` will _always_ be served on the `/` request. This isn't a bad thing, it's just something to be aware of!

**Important:** This server behaves exactly like Preact CLI's [prerendering](https://github.com/developit/preact-cli#pre-rendering). This means that if you (or your libraries) have references to `window` or `document`, you must wrap them in conditional statements or include a shim.


## Install

```sh
$ git clone https://github.com/lukeed/preact-cli-ssr
$ npm install
$ npm run build
$ npm start
```


## License

MIT © [Luke Edwards](https://lukeed.com)