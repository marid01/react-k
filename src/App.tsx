import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} />
            <Accordion titleValue={"Users"} />
            Article 2
            <Rating value={4}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>

        </div>
    );
}

function PageTitle(props: any) {
    return <h1>
        {props.title}
    </h1>

}


export default App;
