import React from 'react';

import Accordion from './accordion';
import data from './events.json';

const EventList = (props:any) => {
    return(
        <>
        {
        data.map((dataEvents)=>{
            //var fecha = new Date(dataEvents.date).getMonth().toString();
            const fecha = parseInt(dataEvents.date);
            if (fecha === props.mes) {
            return <div key={dataEvents.id}>
            <Accordion title={dataEvents.title} contentTitle={dataEvents.contentTitle} content={dataEvents.content}/>
            </div>
            } return null
            })
        }
    </>
    )
}

export default EventList;