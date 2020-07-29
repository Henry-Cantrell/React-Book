export const usernameCaptureReducer = (state= 'empty', action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return state = action.payloadThree;
        default:
            return state = 'empty'
    }
}