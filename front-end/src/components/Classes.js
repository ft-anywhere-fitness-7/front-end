import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Class from './Class';

export default function Classes (props) {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        const getClasses = () => {
            axios
            .get('https://ft-anywherefitness-7.herokuapp.com/api/classes/')
            .then(res => {
                console.log(res);
                setClasses(res.data);
            })
            .catch(err => {
                console.error(err);
            })
        }
        getClasses();
    }, [])
    return(
        <Class classes={classes}/>
    );
}