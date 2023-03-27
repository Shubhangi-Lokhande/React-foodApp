import React from "react";
import ReactDOM from 'react-dom/client';

const heading =  React.createElement("h1",{id:'heading'}, "Namaste React 🚀");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

//JSX => Using Babel transpiles to React.createElement(It is a react object) => Using render convert it tohtml element and replaced it to the DOM

const jsxheading = (<h1 className="head" tabIndex="5">
                    Namaste React using JSX 🚀
                   </h1>);

//React functional Component

const HeadingComponent = () => {
    return <h1>Namaste react functional Component</h1>
}
console.log(jsxheading);

root.render(jsxheading);

