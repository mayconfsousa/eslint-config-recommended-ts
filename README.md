# eslint-config-ts-recommended

An ESLint shareable config for NodeJS and React projects using Typescript

### Install

- Using `yarn`:

```
yarn add -D eslint eslint-config-ts-recommended eslint eslint-plugin-import-helpers eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier typescript
```

- Using `npm`:

```
npm install -D eslint-config-ts-recommended eslint eslint-plugin-import-helpers eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier typescript
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
