# Pure react

To initiate a pure React project, one can start by building the application without relying on compilation or bundling tools like Babel, Webpack, or Parcel. This approach focuses on understanding and using React in its raw form, where you work with plain JavaScript and HTML. While modern development often involves build tools to streamline the process, this method helps to grasp the core concepts of React.

## Understanding Babel, Webpack, and Parcel

Before diving into the setup, it's beneficial to understand what these tools are and why they're commonly used in React projects:

1. **Babel:** Babel is a JavaScript compiler that converts ECMAScript 2015+ (ES6+) code into backward-compatible JavaScript, allowing the code to run in older browsers. Additionally, Babel can transform JSX (JavaScript XML) syntax, a markup language used in React, into regular JavaScript that browsers can understand.
2. **Webpack:** Webpack is a module bundler. It processes your project files and dependencies, combines them into bundles, and optimizes them for efficient loading and execution. Webpack handles various file types—JavaScript, CSS, images, and more—consolidating them into a single bundle or multiple bundles as needed.
3. **Parcel:** Similar to Webpack, Parcel is a bundler with a focus on being zero-configuration, meaning it aims to work out of the box without the need for extensive setup. It also supports module bundling, code optimization, and hot module reloading, making development faster and more convenient.

### Benefits of Using These Tools

- **Enhanced Compatibility:** By compiling ES6+ code to ES5, Babel ensures your JavaScript runs smoothly across different browsers, including older versions.
- **Optimized Performance:** Webpack and Parcel optimize and bundle code, which reduces the number of HTTP requests and improves load times.
- **Support for Modern JavaScript Syntax and JSX:** Tools like Babel enable you to use JSX, a popular syntax in React, directly in your code without worrying about browser compatibility.
- **Efficient Development Experience:** Bundlers like Webpack and Parcel support features such as hot module replacement (HMR), which allows you to see changes immediately without refreshing the entire page, speeding up the development process.

In this Documentation, we will forgo these tools to work directly with the core React libraries, focusing on plain JavaScript and HTML.

## Step-by-Step Project Setup

**1. Create the Project Structure:** Begin by creating a project directory. For this example, we’ll call it adopt-me, as we will build a pet adoption app. Within this directory, create a `src/` folder, which will contain all necessary files, including HTML, JavaScript, and CSS.

**2. Create the HTML File:** In the `src/` directory, create an `index.html` file. This file will serve as the backbone of your application and looks like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Adopt Me</title>
  </head>
  <body>
    <div id="root">not rendered</div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
    <script>
      // Your code will go here
    </script>
  </body>
</html>
```

Here, we have a root div with the ID "root," which acts as the container for the React application. React will use this div as the entry point to render components.

The React and ReactDOM libraries are loaded via CDN links. The first script tag loads React, which contains the API for building components. The second script tag loads ReactDOM, which provides rendering capabilities for web browsers.

**3. Loading the Application in the Browser:** Open the `index.html` file in a web browser to see the initial setup. You should see the text "not rendered," which indicates that the `root` div is empty and ready to be filled with React components.

### Adding CSS Styles

To style the app, create a `style.css` file in the `src/` directory. This file will include any basic styles for the application. While this is not a CSS-focused guide, styling will enhance the app’s appearance.

### Building the React Application

Within the final `<script>` tag, add the following code to define and render a basic React component:

```js
const App = () => {
  return React.createElement('div', {}, React.createElement('h1', {}, 'Adopt Me!'));
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
```

Explanation of the Code:

- App Component: The App component is a function that returns markup using `React.createElement`. This method dynamically creates DOM elements, in this case, a `div` containing an `h1` with the text "Adopt Me!"
- Rendering: `ReactDOM.createRoot` defines where the app should be rendered within the HTML. The render method then mounts the App component to this container.

ReactDOM.createRoot is a new API as of React v18. The old ReactDOM.render is still available (and deprecated) but it'll render your app in "legacy" mode which won't use all the fun new features packed into React v18

By working directly with React, without Babel, Webpack, or Parcel, you gain a clearer understanding of React’s structure and functionality. This foundational knowledge will make using build tools more intuitive and effective as you progress in your React development journey.
