import React from "react"
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Timeline.css'

import TimelineElement from "./TimelineElement";

export default function Timeline() {

    const timelineEvents = [
        {
            title: "Team Registrations Start",
            line1: "Register your team of 3 members.",
            //line2: "Lorem Ipsum has been the industry's standard dummy text",
            date: "November 01"
        },
        {
            title: "Team Registrations End",
            line1: "Register your team before the deadline.",
            //line2: "Lorem Ipsum has been the industry's standard dummy text",
            date: "November 10"
        },
        {
            title: "Competition Starts",
            line1: "Decode 2021 Officially Starts.",
            //line2: "Lorem Ipsum has been the industry's standard dummy text",
            date: "November 13"
        },
    ]

    return (
        <div style={{ background: "#093147", padding: '32px 0', position: "relative", paddingTop: "50px" }}>
            <h2 className="title" id="timeline">Event Timeline</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <VerticalTimeline>
                    {
                        timelineEvents.map((item, index) => (
                            <TimelineElement
                                title={item.title}
                                line1={item.line1}
                                line2={item.line2}
                                date={item.date}
                                id={index}
                                key={index}
                            />
                        ))
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}