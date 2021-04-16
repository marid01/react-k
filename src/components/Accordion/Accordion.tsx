import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

// function Accordion1(props: AccordionPropsType) {
//     if (props.collapsed === true) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     } else {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//     }
// }

// Условный рендеринг
function Accordion(props: AccordionPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>
        <h3>{props.title}</h3>
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


export default Accordion;