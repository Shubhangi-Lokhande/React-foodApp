
    const parent = React.createElement('div', {id: 'parent'},
                   [React.createElement('div', {id: 'child1'},
                   [React.createElement('h1', {}, "I am h1 tag"), React.createElement('h2', {}, "I am h2 tag")]
                    ),
                    React.createElement('div', {id: 'child2'},
                   [React.createElement('h1', {}, "I am h1 tag"), React.createElement('h2', {}, "I am h2 tag")]
                    )
                   ]
                   );



/*const heading = React.createElement("h1", {id: 'heading', xyz: 'xyz'}, "Hello World from React!");*/

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);