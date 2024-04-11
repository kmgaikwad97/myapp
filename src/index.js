// 1. Import React and ReactDom Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Get Reference to the div with ID name as root 
const el = document.getElementById('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create Component 
function App(){
    let message = "Bye !!"
    if(Math.random()>0.5){
        message = "Hello there!"
    }
    return <div>{message}</div>
}

// 5. Show Component on the Screen
root.render(<App/>);