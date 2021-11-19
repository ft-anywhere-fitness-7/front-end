import { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import ClassListSession from './ClassListSession';
import ClassFooter from './ClassFooter';
import { Link } from 'react-router-dom';

export default function ClassList (props) {
    const { classes, setClasses } = props;
    
    useEffect(() => {

        axiosWithAuth()
            .get('/classes/')          
            .then (resp => {                
                console.log('resp in ClassList.js: ', resp);
                setClasses(resp.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    return(<>
        <nav className="nav-bar">
            <div className="left-links">
            <Link className="link" to='/'>Anywhere Fitness &nbsp; {props.message}  </Link>                                                 
            </div>
            <div className="right-links">                                                         
                {(props.role === 'instructor' && props.isLoggedIn) && <Link className="link"  to='/create'>Create a Class</Link>  }                 
                {(props.role === 'client' && props.isLoggedIn) && <Link className="link"  to='/create'>Jion a Class</Link> }             
                {props.isLoggedIn && <Link className="link" to='/logout'>Logout</Link>}                       
            </div>
            </nav>
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Intensity</th>
                    <th>Instructor</th>
                    <th>Location</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        classes.map(session=><ClassListSession key={session.id} session={session}/>)
                    }
                </tbody>
                </table>
            <ClassFooter />
        </div>
    </>);
}