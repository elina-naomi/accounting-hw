import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {changePasswordPage, editPage, homePage, loginPage} from "../utils/constants";

const Profile = (props) => {

    const [header,setHeader] = useState(JSON.parse(localStorage.getItem('token')));


    useEffect(() => {
        props.login(JSON.parse(localStorage.getItem('token')));
    }, []);



    if (!header) {
        return <Redirect to={`/home`}/>
    }
    if (!props.user) { //если в state нет юзера, т.е. токен не обработан
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <div>
                <p>Login: {props.user.login}</p>
                <p>First name: {props.user.firstName}</p>
                <p>Last name: {props.user.lastName}</p>

                <Link to={`/${editPage}`}><button>Edit profile</button></Link>
                <Link to={`/${changePasswordPage}`}><button>Change password</button></Link>


                <button onClick={()=> {
                    localStorage.removeItem('token');
                    setHeader(null);
                }}>Logout</button>
            </div>

        )
    }

};

export default Profile;