import React from 'react';
import '../CSS/Class.css'
import { Link } from 'react-router-dom';

export default function Class (props) {
    return(
        <div className="class-wrapper">
            <div>
                <h1>{props.i.class_name}</h1>
            </div>
            <div className="intensity">
                <h5>
                    {props.i.intensity_level}
                </h5>
            </div>
            <div>
                <span className="date">Date: {props.i.class_date} Time: {props.i.start_time}</span>
                <span className="length">Length: {props.i.class_duration}</span>
            </div>
            <div>
                <span className="instructor">Date: {props.i.instructor}</span>
                <span className="location">Location: {props.i.class_location}</span>
            </div>
            <div>
                <Link className="join-class" to='/login'>Join this class</Link>
            </div>
        </div>
    )
}