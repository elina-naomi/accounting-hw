import {errorLoginAction, requestLoginAction, SUCCESS_LOGIN, successLoginAction} from "./loginActions";
import {baseUrl} from "../utils/constants";

export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const ERROR_REGISTER = 'ERROR_REGISTER';
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';

export const requestRegisterAction = () => (
    {
        type: REQUEST_REGISTER,
        payload: 'loading..'
    }
)

export const errorRegisterAction = () => (
    {
        type: ERROR_REGISTER,
        payload: 'Error register'
    }
)

export const successRegisterAction = data => (
    {
        type: SUCCESS_REGISTER
        // payload: {
        //     firstName: data.firstName,
        //     lastName: data.lastName,
        //     login: data.login,
        //     password: data.password
        // }
    }
)

export const registerAction = (userData) => {
    return dispatch => {
        console.log(userData);
        dispatch(requestRegisterAction());
        const header = {'Authorization': `Basic ${btoa(userData.login + ':' + userData.password)}`};

        fetch(`${baseUrl}/account/user`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(''+ response.status)
                }
            })
            .then(data => {
                console.log(data);

                console.log(header);
                localStorage.setItem('token', JSON.stringify(header));
                dispatch(successRegisterAction(data));

            })
            .catch(e => {
                console.log(e);
                dispatch(errorRegisterAction());
            })


    }
}