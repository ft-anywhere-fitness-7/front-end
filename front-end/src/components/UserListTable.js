import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = (props)=> {
    
    const { user_id, username, role_type} = props.user;

    console.log('username: ', username);

    return(<div className="class-wrapper">
            <div>
                <h5>{user_id}</h5>            
                <h5>{username}</h5>
                <h5> {role_type}   </h5>           
            
                
            </div>
            
            <div>
                {/* <Link className="join-class" to='/login'>Join this class</Link> */}
            </div>
        </div>
        );
}

export default MovieListItem;