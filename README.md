# eslint-config-ts-recommended

An ESLint shareable config for NodeJS and React projects using Typescript

### Install

- Using `npm`:

```
npx install-peerdeps eslint-config-ts-recommended --dev
```

- Using `yarn`:

```
npx install-peerdeps eslint-config-ts-recommended --dev --yarn
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
