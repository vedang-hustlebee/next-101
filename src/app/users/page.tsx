/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { FC, useState } from "react";

const users: FC = () => {
    const [_users, setUsers] = useState([]);

    const getUsers = () => {
        fetch('/api/users').then(async (response) => {
            const theUsers = await response.json();
            console.log('theUsers: ', theUsers);
            setUsers(theUsers);
        }).catch((error) => {
            console.log('error: ', error);
        });
    };
    return (
        <div className="btn btn-primary bg-white text-black">
            <button onClick={getUsers} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Users
            </button>
            <p>this is list of all users</p>

            {
                _users.map((user: any, index: number) => {
                    return (
                        <div key={index}>
                            <p>{user.name} - {user.email}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default users;
