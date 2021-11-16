import React, { useEffect } from 'react';
import { array } from '../../../../../web-sprint-challenge-single-page-applications/node_modules/yup/lib/locale';

export default function Class (props) {
    const classes = props.classes;
    console.log(classes[0].class_name);
    console.log(classes[1].class_name);
    console.log(classes[2].class_name);
    console.log(classes[3].class_name);
    return(
        <div>
            <div>
                <h1>Classes here</h1>
            </div>
           
        </div>
    )
}