import React, {useState} from 'react';
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleClickButton() {
        const header = {'Authorization': `Basic ${btoa(login + ':' + password)}`};
        props.login(header);
        setLogin('');
        setPassword('');
    }

    let header = JSON.parse(localStorage.getItem('token'));


    if (!header) { //если в localStorage нет токена
        return (
            <div>
                <label>login:
                    <input onChange={event => setLogin(event.target.value)} type='text' placeholder='enter your login'/>
                </label>
                <label>password:
                    <input onChange={event => setPassword(event.target.value)} type='password'
                           placeholder='enter your password'/>
                </label>
                <button onClick={handleClickButton}>Login</button>
                <p>{props.message}</p>
            </div>
        );
    }
    else {
        return <Redirect to={`/profile`}/>
    }

};

export default Login;