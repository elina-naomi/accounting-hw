import {baseUrl} from "../utils/constants";
import {requestEditAction} from "./editUserActions";

export const REQUEST_PASSWORD = 'REQUEST_PASSWORD'
export const ERROR_PASSWORD = 'ERROR_PASSWORD';
export const SUCCESS_PASSWORD = 'SUCCESS_PASSWORD';

export const requestChangePasswordAction = () => (
    {
        type: REQUEST_PASSWORD,
        payload: 'loading..'
    }
)

export const errorChangePasswordAction = () => (
    {
        type: ERROR_PASSWORD,
        payload: 'Entered data is incorrect. Please try again.'
    }
)

export const successChangePasswordAction = password => (
    {
        type: SUCCESS_PASSWORD
    }
)

export const changePasswordAction = (password,login) => {
    return dispatch => {
        dispatch(requestEditAction());

        let baseAuth= localStorage.getItem('token').split(':')[1];
        baseAuth = baseAuth.substring(1,baseAuth.length-2);

        const header = {'Authorization': `Basic ${btoa(login + ':' + password)}`};

        fetch(`${baseUrl}/account/user/password`, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': baseAuth,
                'X-Password': password
            }})
            .then(response => {
                if (response.ok) {
                    console.log(`${JSON.stringify(header)}   from changePasswordAction`)
                    localStorage.setItem('token', JSON.stringify(header));
                    dispatch(successChangePasswordAction());
                } else {
                    throw new Error(''+ response.status)
                }
            })
            .catch(e => {
                console.log(e);
                dispatch(errorChangePasswordAction());
            })


    }
}