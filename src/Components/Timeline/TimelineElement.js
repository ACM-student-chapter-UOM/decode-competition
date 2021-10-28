import React from "react";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default function TimelineElement({id}) {

    const side = id ? id%2===0 ? "Right" : "Left" : "Right"
    console.log(side)

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ position: "relative", background: '#071330' ,boxShadow: "none", padding: 0, [`padding${side}`]: 32, minHeight: 150}}
            contentArrowStyle={{ borderRight: '7px solid  rgba(0,0,0,0)' }}
            date="NOVEMBER 01st"
            iconStyle={{ background: '#fff', color: '#fff' }}
            dateClassName={ "date" }
        >
            <div className="timeline-element" style={{ alignItems: `${side === "Right" ? "end" : "start"}` }}>
                <h4 style={{color: "white"}} className="vertical-timeline-element-title">Team Registrations</h4>
                <p style={{color: "white"}}>Register your team by</p>
                <p style={{color: "white", marginTop: 0}}>filling the form provided.</p>
                <hr className="line" />
                <div className="circle" />
                <div className="sub-circle" />
            </div>
        </VerticalTimelineElement>
    )
}