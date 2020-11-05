# Simple Marketplace FE

## Description
This is an implementation of website using ReactJS and Redux. This is a basic implementation of e-commerce. For the API, I use from my other repository. You can clone [here](https://github.com/scys12/clean-architecture-golang)

## Installation
1. Make sure you have NodeJS. Install [here](https://nodejs.org/en/download/)

2. Clone the repository
```bash
git clone https://github.com/scys12/simple-marketplace-fe
cd simple-marketplace-fe
```

3. You can choose either npm or yarn as package manager. If you want to use yarn, run 
```node
npm install -g yarn
yarn
yarn install
yarn start
```
If you prefer using npm, run 
```node
npm install
npm start
```
More information about Yarn, see [docs](https://yarnpkg.com/).

# Project Structure
In this project, I use Component/Container Architecture where all the business logic done in container, while in component, there are pure UI components.

### `components`
Consist of UI components. There is no business logic here.

### `containers`
Consist of page that wrapping components.

### `reducers`
Consist of reducers that will be combined.

### `store`
Initialize redux

### `utils`
Consist of global config and theme for the website