
# create-poi-react-app

[![NPM version](https://img.shields.io/npm/v/create-poi-react-app.svg?style=flat)](https://npmjs.com/package/create-poi-react-app) [![NPM downloads](https://img.shields.io/npm/dm/create-poi-react-app.svg?style=flat)](https://npmjs.com/package/create-poi-react-app) [![CircleCI](https://circleci.com/gh/egoist/create-poi-react-app/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/create-poi-react-app/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

The `create-react-app` that you're familiar with but uses [Poi](https://github.com/egoist/poi) instead of `react-scripts`.

<img src="https://i.loli.net/2017/12/25/5a411bf8308c8.png" alt="preview" width="600">

## Install

```bash
yarn global add create-poi-react-app
create-poi-react-app my-app

# Or use `yarn create` or `npx`
yarn create poi-react-app my-app
npx create-poi-react-app my-app
```

## Usage

Folder structure:

```bash
.
├── package.json
├── poi.config.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
└── yarn.lock
```

Yeah it's exactly the same as a create-react-app project but with an extra [poi.config.js](./poi.config.js).

### `yarn dev`

Starts development server.

### `yarn build`

Builds your to `./dist` folder.

### `yarn test`

Starts the test runner.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**create-poi-react-app** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/create-poi-react-app/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
