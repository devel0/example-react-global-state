# example react global state

## description

Shows usage of [react-hookstore](https://github.com/jhonnymichel/react-hookstore) library to manage global state across multiple components.

notes:
- clicking on a component change global state hooked and attached to all other components that make usage of `useStore`
- each store can have different name and backing type
- stores created toplevel at `App.tsx`
- an helper function allow to change after a cloneDeep to manage complex state objects

## how this project was built

```sh
yarn create react-app example-react-global-state --typescript
cd example-react-global-state/
yarn add react-hookstore lodash @types/lodash
echo "BROWSER=none" > .env
code .
yarn start
```

- hit F5
- choose `Chrome`
- set on `launch.json` startup url `"url": "http://localhost:3000",`
- F5 again
