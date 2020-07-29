# eslint-config-ts-recommended

An ESLint shareable config for NodeJS and React projects using Typescript

### Install

- Using `yarn`:

```
yarn add -D eslint prettier typescript eslint-config-ts-recommended
```

- Using `npm`:

```
npm install -D eslint prettier typescript eslint-config-ts-recommended
```

### Usage

- Use with `React` projects:

```js
// .eslintrc.js

module.exports = {
  extends: 'ts-recommended/react',
};
```

- Use with `NodeJS` projects:

```js
// .eslintrc.js

module.exports = {
  extends: 'ts-recommended/node',
};
```
