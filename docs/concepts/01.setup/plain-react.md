# Plain React setup

To start web development with traditional way developers tends to have a 3 main files.

-`index.html`
-`style.css`
-`main.js`

To add a react into your plain project developers must add two script tag into their `index.html`

```html
<script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
```

## Example

Here's a complete example of a simple React setup:

```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>Adopt Me</title>
  </head>
  <body>
    <div id="root">not rendered</div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
    <script>
      // Your code is going to go here
      const App = () => {
        return React.createElement(
          "div",
          {},
          React.createElement("h1", {}, "Adopt Me!")
        );
      };

      const container = document.getElementById("root");
      const root = ReactDOM.createRoot(container);
      root.render(React.createElement(App));
    </script>
  </body>

  </html>
```

## Key Elements in example

- `<div id="root">not rendered</div>`: This `div` is the mounting point for the React application. Initially, it contains placeholder text that will be replaced once React renders the component.
- `React.createElement:` In this setup, React elements are created using `React.createElement` instead of JSX, the pure React way. JSX is a syntax extension for JavaScript that resembles HTML but requires a compiler (e.g., Babel) to transform it into JavaScript. Using createElement directly keeps this example straightforward and dependency-free.
- `ReactDOM.createRoot:` Introduced in React v18, this new API replaces the older `ReactDOM.render` method. Although `ReactDOM.render` is still available, it's deprecated and doesn't support the new features introduced in React v18.

## Creating `App.js`

In most projects, managing multiple components efficiently is crucial. Typically, each component is divided into its own file for better maintainability. Although the App component in our previous example was embedded directly within a `<script>` tag, moving components like `App` and `Pet` into separate files, such as `App.js`, enhances the project structure.

```js
  // App.js 
  const Pet = (props) => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
    ]);
  };

  const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
    ]);
  };

  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));
```

### Including the Script in index.html

Replace the inline script in your HTML with an external reference:

```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>Adopt Me</title>
  </head>

  <body>
    <div id="root">not rendered</div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="./App.js"></script>
  </body>

  </html>
```

### Understanding the example

- **Pet Component:** Represents an individual pet. It takes in props to receive data from its parent component, `App.`
- **App Component:** Serves as the main application component. It renders multiple Pet components with different properties.

### Using props Effectively

Props are variables passed from parent to child components, enabling data reuse and flexibility. The Pet component can render different pets dynamically by using different sets of props, making it versatile and reusable.

### React Warning: Unique Keys

When rendering lists of elements in React, a console warning may appear advising each child in a list should have a unique "key" prop. React uses keys to manage component identity during updates, which improves performance by reordering elements instead of re-rendering them. Assigning a unique key to each component in a list can help React track these components more efficiently.

## Recap

- React can be used without any build tools by including it via script tags in the HTML file.
- As we see in the example above. React creates a object contains HTML tag's metadata with `createElement()` function. And then appends it to the `<div id="root">`.
- Structure a React project by moving components into separate files is a very optimal approach.
- Create and use reusable components for more flexibility.
- Pass an unique keys to lists of components for efficient rendering and illustrates.
