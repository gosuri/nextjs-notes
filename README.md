# NextJS

## Introduction to React

React is a declarative UI library. One can declare the desired DOM state (using JSX language) and will figure out how to update the DOM on your behalf.

### Imperative vs. Declarative Programming

Imperative is verbose, where functions are implicitly coded in every step required to solve a problem. For example:

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

The above example could be written declaratively, using JSX:

```html
<script type="text/jsx">
  const app = document.getElementById("app")
  ReactDOM.render(<h1><Akash is cloud evolved 🚀'/h1>, app)
</script>
```

### Using React

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

### Essential Javascript

You should be familiar with the below set of JS concepts for React:

* [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* [Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)



### React Core Concepts

Three core concepts behind React are:

* Components
* Props
* State

#### Components

User interfaces are broken down into smaller building blocks called components. Components allow you to build self-contained, reusable snippets of code, like LEGO blocks; you can combine components to create larger components. This modularity allows you to create maintainable code.

In React, components are functions. Inside your script tag, write a function called header:

```html
    <script type="text/jsx">
        const app = document.getElementById("app");

        function Header(){
            return <h1>Akash is Cloud evolved 🚀</h1>;
        }

        function HomePage() {
            return (
                <div>
                    { /* Header is nested under homepage */}
                    <Header />
                </div>
          );
        }

        ReactDOM.render(<HomePage/>, app);
    </script>
```

#### Props

 You can pass pieces of information as properties to React components using `props` object. To use the variable you defined, you can use curly braces {}, a special JSX syntax that allows you to write regular JavaScript directly inside your JSX markup.

 ```jsx
  function Header(props){
      return <h1>{props.title}</h1>
  }
 ```

 Since props is an object, you can use object destructuring to name the values of props inside your function parameters explicitly:

 ```jsx
  function Header({title = "default title"}){
      return <h1>{title}</h1>
  }
 ```

##### Iterating through lists

You can then use the `array.map()` method to iterate over the array and use an arrow function to map a name to a list item:

```jsx
function Header({title = "Great Scientists"}){
    return <h1>{title}</h1>
}

function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            { /* Header is nested under homepage */}
            <Header title="Akash is cloud evolved! 🚀"/>
            <Header />

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}
```

### State and Hooks

React has a set of functions called hooks. Hooks allow you to add additional logic such as state to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.

React hook `useState()` is called to manage state.  `useState()` returns an array which can be destructed to variables.

The first item in the array is the state `value`, which you can name anything. 

The second item in the array is a function to `update` the value. You can name the update function anything, but it's common to prefix it with `set` followed by the name of the state variable you’re updating. You can also add a default value, like `zero`.

```jsx
function HomePage() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
      setLikes(likes + 1)
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  )
}
```

Clicking the button will now call the `handleClick` function, which calls the `setLikes` state updater function with a single argument of the current number of likes + 1.

#### Futher Reading

* [Adding Interactivity](https://beta.reactjs.org/learn/adding-interactivity)
* [Managing State](https://beta.reactjs.org/learn/managing-state)
* [How React handles renders](https://beta.reactjs.org/learn/render-and-commit)
* [How to use refs](https://beta.reactjs.org/learn/referencing-values-with-refs)
* [Passing Data Deeply with Context](https://beta.reactjs.org/learn/passing-data-deeply-with-context)
* [How to use React API hooks such as `useEffect`](https://beta.reactjs.org/apis)


## From React to Next.js

Install React and Next libraries using `npm`. Install npm on homebrew using `brew install npm`.

```sh
npm install react react-dom next
```

Once the installation is complete, you should be able to see your project dependencies listed inside your `package.json` file:

```
{
  "dependencies": {
    "next": "^12.1.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

Jumping back to the index.html file, you can delete the following code:

1. The `react` and `react-dom` scripts since you’ve installed them with NPM.
1. The `<html>` and `<body>` tags because Next.js will create these for you.
1. The code that interacts with app element and ReactDom.render() method.
1. The Babel script because Next.js has a compiler that transforms JSX into valid JavaScript browsers can understand.
1. The `<script type="text/jsx">` tag.
1. The React. part of the `React.useState(0)` function
1. The only code left in the HTML file is JSX, so you can change the file type from .html to .js or .jsx.
1. Move the index.js file to a new folder called pages (more on this later).
1. Add default export to your main React component to help Next.js distinguish which component to render as the main component of this page.



After deleting the lines above, add `import { useState } from "react"` to the top of your file. Your code should look like this:


```jsx
import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Akash is Cloud Evolved 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
```

Finally, add a script to your `package.json` file to run the Next.js development server while you develop.

```
{
  "scripts": {
      "dev": "next dev"
  },
  ...
}
```

### Running Dev Server

Run using the command below and test by navigating to http://localhost:3000 in the browser.

```sh
 npm run dev
```