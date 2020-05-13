# eslint-config-ts-recommended

An ESLint shareable config for NodeJS and React projects using Typescript

### Install

- Using `yarn`:

```
npx install-peerdeps --dev --yarn eslint-config-ts-recommended
```

- Using `npm`:

```
npx install-peerdeps --dev eslint-config-ts-recommended
```

### Usage

- Use with `React` projects:

```js
// .eslintrc.js

module.exports = {
  extends: ['ts-recommended/react'],
  parserOptions: {
    project: './tsconfig.json'
  }
};
```

- Use with `NodeJS` projects:

```js
// .eslintrc.js

module.exports = {
  extends: ['ts-recommended/node'],
  parserOptions: {
    project: './tsconfig.json'
  }
};
```
