import {ERROR_LOGIN, REQUEST_LOGIN, SUCCESS_LOGIN} from "../actions/loginActions";
import {ERROR_REGISTER, REQUEST_REGISTER, SUCCESS_REGISTER} from "../actions/registerActions";
import {ERROR_EDIT, REQUEST_EDIT, SUCCESS_EDIT} from "../actions/editUserActions";
import {ERROR_PASSWORD, REQUEST_PASSWORD, SUCCESS_PASSWORD} from "../actions/changePasswordActions";

export const accountReducer = (state, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
        case ERROR_LOGIN:
        case REQUEST_REGISTER:
        case ERROR_REGISTER:
        case REQUEST_EDIT:
        case ERROR_EDIT:
        case REQUEST_PASSWORD:
        case ERROR_PASSWORD:
            return {...state, message: action.payload};
        case SUCCESS_LOGIN:
        case SUCCESS_EDIT:
            return {...state, userInfo: action.payload, message: null};
        case SUCCESS_REGISTER:
        case SUCCESS_PASSWORD:
            return {...state, message: null}
        default:
            return state;
    }
}