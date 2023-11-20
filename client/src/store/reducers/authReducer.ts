import { LOGIN_SUCCESS } from "../actions/authActions";

const initialState = {
    user: undefined
};

const authReducer = (state = initialState, action: any) => {
    switch(action.type){
        case LOGIN_SUCCESS: 
        return {
            ...state,
            user: action.payload,
        };
        default: 
            return state;
    }
};

export default authReducer;