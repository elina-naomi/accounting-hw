import React, {useState} from 'react';
import {Redirect} from "react-router-dom";

const ChangePassword = (props) => {
    const[password,setPassword]=useState('');
    const [isChanged, setIsChanged] = useState(false);
    const [header,setHeader] = useState(JSON.parse(localStorage.getItem('token')));



    function handleClickButton() {
        props.changePassword(password,props.user.login);
        setPassword('');
        setIsChanged(true);
    }


    if (!header) {
        return <Redirect to={`/home`}/>
    }
    if(!isChanged) {
        return (
            <div>
                <label>New password
                    <input onChange={event => setPassword(event.target.value)} type='password'/>
                </label>
                <button onClick={handleClickButton}>Save changes</button>
            </div>
        );
    } else {
        return <Redirect to={`/profile`}/>
    }
};

export default ChangePassword;