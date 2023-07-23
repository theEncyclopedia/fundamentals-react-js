# Configuring tailwindcss for react.js

Tailwind CSS is a utility-first CSS framework that is rapidly growing in popularity within the React community
because of its efficiency and flexibility. Assuming you have already created the react project, to integrate
tailwindcss into a React.js project, you'llneed to follow a few steps:

**1. Install Tailwind CSS via npm**

```shell
npm install tailwindcss postcss autoprefixer postcss-cli
```

**2. Initialize Tailwind CSS**

```shell
npx tailwindcss init
```

This command creates a tailwind.config.js file at your project root. In this file, you can customize your installation.

```js
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

**3. Create a PostCSS configuration**

```shell
touch postcss.config.js
```

Edit the `postcss.config.js` file to look like this:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**4. Generate Tailwind CSS styles**

Create a CSS file, typically in src/styles/tailwind.css, and include the following base Tailwind styles:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Then, you can generate the Tailwind CSS styles using this command:

```bash
npx tailwindcss build src/styles/tailwind.css -o src/styles/output.css
```

**5. Add the Script to generate Tailwind CSS styles to the `package.json`**

You can add the command to generate your styles in your package.json to ensure it's run before the application
is started. Here's an example:

```json
"scripts": {
  "start": "npm run build:tailwind && react-scripts start",
  "build": "npm run build:tailwind && react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "build:tailwind": "npx tailwindcss build src/styles/tailwind.css -o src/styles/output.css"
},
```

**6. Import your CSS file to your application**
In your src/index.js file, import the generated CSS file:

```js
import "./styles/output.css";
```

**7. Purging Unused CSS in Production**
To keep the size of the final CSS file small and optimal, Tailwind CSS provides a feature called PurgeCSS which
removes unused CSS. In your tailwind.config.js file, configure the purge option:

```js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```
