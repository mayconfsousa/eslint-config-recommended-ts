# eslint-config-ts-recommended

An ESLint shareable config for NodeJS and React projects using Typescript

### Install

> Using `yarn`

```
npx install-peerdeps --dev --yarn eslint-config-ts-recommended
```

> Using `npm`

```
npx install-peerdeps --dev eslint-config-ts-recommended
```

### Usage

Extend in your `.eslintrc.js`:

> For `react` projects:

```js
module.exports = {
  extends: ['ts-recommended/react'],
};
```

> For `node` projects:

```js
module.exports = {
  extends: ['ts-recommended/node'],
};
```