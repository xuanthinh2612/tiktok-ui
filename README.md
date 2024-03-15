# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Cac buoc tao base 1 du an reactjs

1. cai dat thu vien de customize webpack (override webpack)

    - npm install customize-cra react-app-rewired --dev

    - tao file config-overrides.js cung cap voi src

    - add cac function can config duoc ho tro boi customize-cra vd: useBabelrc

2. Cài đặt babel-plugin-module-resolver (de cho dong code import ngan hon)
   use import '~/abc' instead of inport ../../../abc
   ~ equal /src

    - npm install --save-dev babel-plugin-module-resolver

    - tao file .babelrc va copy noi dung vao file

    Editors autocompletion

    - tao file jsconfig.json cung cap src va them noi dung file

3. Cài đặt và cấu hình Prettier

    - tao dile .prettierrc
    - tao file .vscode/settings.json
    - cai dat prettier extendtion
    - bat auto format on save CTRL + , va check on vao Editor: Format On Save

4. Cấu hình sử dụng CSS/SASS

    - tao Global style component
    - cai thu vien SASS `npm i -D sass` cho dev
    - reset CSS normalize.css `npm i normalize.css`
    - Default CSS: font-family, font-size, line-height

5. Cấu hình Router/Layout cho dự án

    - Cài đặt react-router-dom: npm i react-router-dom

6. Cai class npm i classnames

7. cài font awesome
    - copy vao package.json và run npm i
8. cài thư viện tippyjs react (drop list for search results) - # npm
    - npm i @tippyjs/react
