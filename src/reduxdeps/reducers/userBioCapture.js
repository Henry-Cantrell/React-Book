export function userBioCapture (state='empty', action) {
    switch(action.type){
        case 'USER_BIO_SEND':
            return state=action.payload
        default:
            return state=state
    }
}