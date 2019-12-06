# t-generator

## Installing

Using npm:

```bash
$ npm install t-generator -g
```

## Example
set scripts in package.json

```js
"scripts": {
  "g": "tg --out-page-dir=src/pages",
}
```
then in your project rootDir

```bash
npm run g -- -p PageTemplate
```

## License

MIT
