import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: any) {
    return <div>
        <AccordionTitle />
        <AccordionBody />
    </div>
}



function AccordionTitle() {
    return <div>
        <h3>меню</h3>
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