# NextJS

# Introduction to React

React is a declarative UI library. One can declare the desired DOM state (using JSX language), React will figure out the steps of how to update the DOM on your behalf.

## Imperative vs Declarative Programming

Impeative is a verbose where functions are implicitly coded in every step required to solve a problem. For example:

```html
<!-- index.html -->
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Akash is cloud evolved 🚀');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

The above example could be written declaritively, using JSX:

```html
<script type="text/jsx">
  const app = document.getElementById("app")
  ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
</script>
```

## Using React

To use React in your project, you can load two React scripts from an external website called unpkg.com:

* **react** is the core React library.
* **react-dom** provides DOM-specific methods that enable you to use React with the DOM.
* **babel** JSX to JS compiler.

Example:

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const app = document.getElementById("app");
      ReactDOM.render(<h1>Akash is Cloud evolved 🚀</h1>, app);
    </script>
  </body>
</html>
```

