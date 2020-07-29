export const usernameCaptureOnLoginReducer = (state = 'empty', action) => {
    switch (action.type) {
        case 'USERNAME_CAPTURE_ON_LOGIN':
            return state=action.payload;
        default: 
            return state='empty'
    }
}