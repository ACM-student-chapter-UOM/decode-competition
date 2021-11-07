import React from "react"
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Timeline.css'

import TimelineElement from "./TimelineElement";

export default function Timeline() {

    const timelineEvents = [
        {
            title: "Team Registration",
            line1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            line2: "Lorem Ipsum has been the industry's standard dummy text",
            date: "NOVEMBER 01st"
        },
        {
            title: "Team Registration",
            line1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            line2: "Lorem Ipsum has been the industry's standard dummy text",
            date: "NOVEMBER 01st"
        },
        {
            title: "Team Registration",
            line1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            line2: "Lorem Ipsum has been the industry's standard dummy text",
            date: "NOVEMBER 01st"
        },
        {
            title: "Team Registration",
            line1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            line2: "Lorem Ipsum has been the industry's standard dummy text",
            date: "NOVEMBER 01st"
        },
    ]

    return (
        <div style={{ background: '#071330', padding: '32px 0', position: "relative" }}>
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