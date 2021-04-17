import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontroledRating/UncontrolledRating";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';

function App() {

let [ratingValue, setRatingValue] = useState<RatingValueType>(4)

    return (
        <div className="App">
            <OnOff/>
            {/*<Accordion titleValue={"Menu"}/>*/}


            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>





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
