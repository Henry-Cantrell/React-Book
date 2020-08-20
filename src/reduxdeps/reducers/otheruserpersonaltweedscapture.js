export function otherUserPersonalTweedsCapture (state = {tweedArray: []}, action) {
    switch (action.type){
        case 'OTHER_USER_PERSONAL':
            return {...state, tweedArray: [...state.tweedArray, action.tweed, action.username, action.id, action.uid]}
        case 'TWEED_CLEAR_OTHER_USER_PERSONAL':
            return state = {tweedArray: []}
        default:
            return state=state
    }
}