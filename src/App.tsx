import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontroledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <OnOff/>
            <Accordion titleValue={"Menu"}/>

            <UncontrolledRating/>





        </div>
    );
}

type PageTitlePropsType =
{
    title: string
}

function PageTitle(props: PageTitlePropsType)
{
    return <h1>
        {props.title}
    </h1>

}


export default App;
