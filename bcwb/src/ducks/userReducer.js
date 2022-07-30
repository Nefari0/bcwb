import axios from "axios";

const initialState = {
    user:{}
};

const LOGIN_USER = 'LOGIN_USER'

export function loginUser() {
    return {
        type: LOGIN_USER,
        payload: axios.get()
    };
}

export default function loginUser(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CHARACTERS + "FULLFILED":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}