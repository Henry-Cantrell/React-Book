export const uidCaptureReducer = (state = 'empty', action) => {
    switch(action.type) {
        case 'LOGGED_IN':
            return state = action.payload;
        default: 
            return state='empty';
    }
}