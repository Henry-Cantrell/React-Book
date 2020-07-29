export const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGGED_IN':
            return state=true;
        case 'SIGN_OUT':
            return state=false;
        default: 
            return false;
    }
}