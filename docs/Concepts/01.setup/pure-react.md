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

Full version of `html`

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

In the example above

`<div id="root">not rendered</div>` is the mounting point for the React application. Initially, it contains placeholder text which will be replaced when React renders the component.

In this setup, React elements are created using `React.createElement` instead of JSX. JSX is a syntax extension for JavaScript that looks similar to XML or HTML. To use JSX, you need a compiler like Babel to convert it into regular JavaScript, which this simple setup avoids to keep things straightforward and dependency-free.

In this setup, React elements are created using React.createElement instead of JSX. JSX is a syntax extension for JavaScript that looks similar to XML or HTML. To use JSX, you need a compiler like Babel to convert it into regular JavaScript, which this simple setup avoids to keep things straightforward and dependency-free.
