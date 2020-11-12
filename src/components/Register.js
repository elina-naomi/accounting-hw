import React, {useState} from 'react';
import {Redirect} from "react-router-dom";

const Register = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    let header = JSON.parse(localStorage.getItem('token'));

    function handleClickButton() {
        const newUser = {firstName, lastName, login, password};
        console.log(newUser);
        props.register(newUser);
        setLogin('');
        setLastName('');
        setFirstName('');
        setPassword('');
    }

    if (!header) {
        return (
            <div>
                <label>login:
                    <input onChange={event => setLogin(event.target.value)} type='text'/>
                </label>
                <label>password:
                    <input onChange={event => setPassword(event.target.value)} type='password'/>
                </label>
                <label>first name:
                    <input onChange={event => setFirstName(event.target.value)} type='text'/>
                </label>
                <label>last name:
                    <input onChange={event => setLastName(event.target.value)} type='text'/>
                </label>
                <button onClick={handleClickButton}>Register</button>
                <p>{props.message}</p>
            </div>
        );
    } else {
        return <Redirect to={`/profile`}/>
    }
}

export default Register;