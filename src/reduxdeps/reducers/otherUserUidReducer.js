export function otherUserUidReducer (state=null, action) {
    switch (action.type) {
        case 'OTHER_USER_UID_SEND':
            return state=action.uid
        case 'OTHER_USER_UID_CLEAR':
            return state=null
        default:
            return state
    }
}