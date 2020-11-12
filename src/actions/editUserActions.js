import {SUCCESS_LOGIN} from "./loginActions";
import {baseUrl} from "../utils/constants";
import {errorRegisterAction, requestRegisterAction, successRegisterAction} from "./registerActions";

export const REQUEST_EDIT = 'REQUEST_EDIT'
export const ERROR_EDIT = 'ERROR_EDIT';
export const SUCCESS_EDIT = 'SUCCESS_EDIT';

export const requestEditAction = () => (
    {
        type: REQUEST_EDIT,
        payload: 'loading..'
    }
)

export const errorEditAction = () => (
    {
        type: ERROR_EDIT,
        payload: 'Entered data is incorrect. Please try again.'
    }
)

export const successEditAction = data => (
    {
        type: SUCCESS_EDIT,
        payload: {
            firstName: data.firstName,
            lastName: data.lastName,
            login: data.login,
            roles: data.roles
        }
    }
)

export const editAction = (userData) => {
    return dispatch => {
        dispatch(requestEditAction());

        let baseAuth= localStorage.getItem('token').split(':')[1];
        baseAuth = baseAuth.substring(1,baseAuth.length-2);

        fetch(`${baseUrl}/account/user`, {
            method: 'PUT',
            headers: {

                "Content-Type": 'application/json',
                'Authorization': baseAuth
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
                dispatch(successEditAction(data));

            })
            .catch(e => {
                console.log(e);
                dispatch(errorEditAction());
            })


    }
}