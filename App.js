import React from "react";
import ReactDOM from 'react-dom/client';

const heading =  React.createElement("h1",{id:'heading'}, "Namaste React 🚀");

const root = ReactDOM.createRoot(document.getElementById('root'));


//React Functional Component

const Title = () => (<h1 className="head" tabIndex="5">
                    Namaste React using JSX 🚀
                   </h1>);


//React functional Component also known as component composition as composing components inside another components
const HeadingComponent = () => {
    return (
        <div id= "container ">
            <Title />
            <h1>Namaste react functional Component</h1>
        </div>
    ) 
}

root.render(<HeadingComponent/>);

