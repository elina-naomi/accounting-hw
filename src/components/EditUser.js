import React, {useState} from 'react';
import {Redirect} from "react-router-dom";

const EditUser = (props) => {
    console.log(props);
    const [firstName, setFirstName] = useState(props.user.firstName);
    const [lastName, setLastName] = useState(props.user.lastName);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [isChanged, setIsChanged] = useState(false);
    const [header,setHeader] = useState(JSON.parse(localStorage.getItem('token')));


    function handleClickButton() {
        props.editUser({firstName, lastName});
        setLastName('');
        setFirstName('');
        setIsChanged(true);
    }


    if (!header) {
        return <Redirect to={`/home`}/>
    }
    if(!isChanged) {
        return (
            <div>
                <label>Enter new first name:
                    <input onChange={event => setFirstName(event.target.value)}  type='text'
                           defaultValue={firstName}
                    />
                </label>
                <label >Enter new last name:
                    <input  onChange={event => setLastName(event.target.value)}  type='text'
                            defaultValue={lastName}
                    />
                </label>
                <button onClick={handleClickButton}>Save changes</button>
            </div>
        );
    } else {
        return <Redirect to={`/profile`}/>
    }

};

export default EditUser;