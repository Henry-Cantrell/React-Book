export function userJoinDate (state='empty', action) {
    switch (action.type) {
        case 'DATE_SEND':
            return state=action.payload
        default:
            return state=state
    }
}