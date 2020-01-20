import React, { useState, useRef } from 'react';
import './accordion.css';
import Chevron from './Chevron';


function Accordion(props: any) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const Acc_content: any = useRef(null);
    const [setRotate, setRotateState] = useState("accordion--icon");

    function toggleAccordion () {
        if (props.contentTitle.length > 1){
            setActiveState(setActive === "" ? "active" : "");
            setRotateState(setActive === "active" ? "accordion--icon" : "accordion--icon rotate");
            setHeightState(setActive === "active" ? "0px" : `${Acc_content.current.scrollHeight}px`);
        }
    }
    
        return (
                    <div className="accordion--section">
                    <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                        <div className="accordion--title" dangerouslySetInnerHTML = {{ __html: props.title}}></div>
                        <Chevron width={10} fill={"#916D9B"} className={ `${setRotate}`}/>
                    </button>
                    <div style={{ maxHeight: `${setHeight}` }} className="accordion--content" ref={Acc_content}>
                        <div className="accordion--content-title" dangerouslySetInnerHTML = {{ __html: props.contentTitle}}></div>
                        <div className="accordion--text" dangerouslySetInnerHTML = {{ __html: props.content}}></div>
                    </div>
                </div>
            )
    
};

export default Accordion;