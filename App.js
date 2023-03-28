import React from "react";
import ReactDOM from 'react-dom/client';

const heading =  React.createElement("h1",{id:'heading'}, "Namaste React 🚀");

const root = ReactDOM.createRoot(document.getElementById('root'));
const root1 = ReactDOM.createRoot(document.getElementById('root1'));

//React element
const elem1 = (<h3>my elem1</h3>);
const elem2 = (
    <div className="elem2">
        {elem1}
        <h4>Element2</h4>
    </div>
)
//React Functional Component
const Head1 = function() {
    return (
        <div>
            {elem2}
            <h2>Welcome to namaste react</h2>
        </div>
    )
}

const Title = () => (<h1 className="head" tabIndex="5">
                    Namaste React using JSX 🚀
                   </h1>);


//React functional Component also known as component composition as composing components inside another components
const HeadingComponent = () => {
    return (
        <React.Fragment> 
            <div id= "container1">
                {Title()}
                <Head1 />
                <Head1></Head1>
                <h1>Namaste react functional Component</h1>
            </div>
            <div id="container2">
                <h2>Second container</h2>
            </div>
        </React.Fragment> 
    ) 
}

root.render(<HeadingComponent/>);
root1.render(<Title/>)

