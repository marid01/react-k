import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return <>
        This is APP component
    </>

}

function Star() {
    return <div>
        star
    </div>
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>


        </div>
    )
}
function AccordionTitle() {
    return <div>
        <h3>Меню</h3>
    </div>
}
function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

function Accordion() {
    return <div>
       <AccordionTitle />
       <AccordionBody />
    </div>
}

export default App;
