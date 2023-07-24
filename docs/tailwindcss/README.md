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
This file is your configuration file for Tailwind CSS. It's where you can customize various aspects of your Tailwind
setup. It is created by running the command npx tailwindcss init.

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

PostCSS is a tool for transforming styles with JavaScript plugins. These plugins can transform styles in various
ways, like adding vendor prefixes to CSS properties using Autoprefixer or transpile future CSS syntax, inline
images, and more.

```shell
touch postcss.config.js
```

When you're using Tailwind CSS with PostCSS, postcss.config.js is the configuration file for PostCSS. The configuration
for PostCSS is actually pretty simple when you're using it with Tailwind CSS.

Edit the `postcss.config.js` file to look like this:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- `plugins`: This is an object where each key-value pair represents a PostCSS plugin that you want to use. The key is
  the name of the plugin and the value is the configuration for that plugin.
- `tailwindcss`: This is the Tailwind CSS plugin. We're passing an empty object as the configuration, which means we
  want to use the default configuration.
- `autoprefixer`: This plugin adds vendor prefixes to CSS rules, to ensure compatibility across different browsers.
  Again, we're using the default configuration by passing in an empty object.

The postcss.config.js file is used to determine which plugins to use during the CSS transformation process. The order
of plugins is important. They are run in the order they are defined in the plugins object. In this case, first, the
Tailwind CSS plugin is run, and then the Autoprefixer plugin.

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
