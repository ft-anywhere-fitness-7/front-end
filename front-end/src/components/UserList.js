import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import axiosWithAuth from '../utils/axiosWithAuth';
import UserListItem from "./UserListItem"

export default function Users (props) {

    const { users, setUsers } = props;

    useEffect(() => {

        axiosWithAuth()
            .get('/users/')          
            .then (resp => {
                // debugger
                console.log('resp in UserList.js: ', resp);
                setUsers(resp.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);
    return(
        <div>
            {
                users.map(user=><UserListItem key={user.id} user={user}/>)
            }
        </div>
    );
}