import React from 'react';
import './Class.css'

export default function Class (props) {
    return(
        <div className="class-wrapper">
            <div>
                <h1>{props.i.class_name}</h1>
            </div>
            <div>
                <span className="date">Date: {props.i.class_date}</span>
                <span className="time">Length: {props.i.class_duration}</span>
            </div>
        </div>
    )
}