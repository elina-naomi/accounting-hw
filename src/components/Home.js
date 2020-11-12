import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {loginPage, registerPage} from "../utils/constants";

const Home = () => {

    let header = JSON.parse(localStorage.getItem('token'));
    if(!header) {
        return (
            <div>
                <Link to={`/${loginPage}`}><button>Log in</button></Link>
                <Link to={`/${registerPage}`}><button>Register</button></Link>
            </div>
        );
    } else {
        return <Redirect to={`/profile`}/>
    }

};

export default Home;