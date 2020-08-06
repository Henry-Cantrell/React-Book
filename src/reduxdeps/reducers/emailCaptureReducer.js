export function emailCaptureReducer (state = 'empty', action) {
    switch(action.type) {
        case 'LOGGED_IN':
            return state = action.emailAddress;
        default: 
            return state=state
    }
}