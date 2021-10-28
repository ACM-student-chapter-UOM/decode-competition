import React from "react"
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Timeline.css'

import TimelineElement from "./TimelineElement";

export default function Timeline() {
    return (
        <div style={{background: '#071330', padding: '32px 0', position: "relative"}}>
            <h2 className="title">Event Timeline</h2>
            <div style={{display: "flex", justifyContent: "center"}}>
                <VerticalTimeline>
                    <TimelineElement />
                    <TimelineElement id={1} />
                    <TimelineElement />
                    <TimelineElement id={3} />
                </VerticalTimeline>
            </div>
        </div>
    )
}