import {baseUrl} from "../utils/constants";
import React from "react";

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';

export const requestLoginAction = () => (
    {
        type: REQUEST_LOGIN,
        payload: 'loading..'
    }
)

export const errorLoginAction = () => (
    {
        type: ERROR_LOGIN,
        payload: 'Entered data is incorrect. Please try again.'
    }
)

export const successLoginAction = data => (
    {
        type: SUCCESS_LOGIN,
        payload: {
            firstName: data.firstName,
            lastName: data.lastName,
            login: data.login,
            roles: data.roles
        }
    }
)

export const loginAction = (header) => {
    return dispatch => {
        dispatch(requestLoginAction());

        console.log(`${JSON.stringify(header)} from loginAction`);
        fetch(`${baseUrl}/account/login`, {
            method: 'POST',
            headers: header
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                console.log(data);
                localStorage.setItem('token', JSON.stringify(header));
                dispatch(successLoginAction(data));

            })
            .catch(e => {
                console.log(e);
                dispatch(errorLoginAction());
            })


    }
}