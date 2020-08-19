export function captureAllUserTweeds (state = {tweedArray: []}, action) {
    switch (action.type){
        case 'SEND_ALL_USER_TWEEDS':
            return {...state, tweedArray: [...state.tweedArray, action.uid, action.id, action.username, action.tweed]}
        case 'CLEAR_ALL_USER_TWEEDS':
            return state = {tweedArray: []}
        default:
            return state=state
    }
}