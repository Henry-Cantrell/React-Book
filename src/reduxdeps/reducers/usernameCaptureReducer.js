export const usernameCaptureReducer = (state= 'empty', action) => {
    switch (action.type) {
        case 'USERNAME_CAPTURE':
            return state = action.username;
        default:
            return state = state;
    }
}