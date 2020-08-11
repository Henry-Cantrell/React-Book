export function followedTweedsCapture (state = {tweedArray: []}, action) {
    switch (action.type){
        case 'TWEED_SEND_FOLLOW':
            return {...state, tweedArray: [...state.tweedArray, action.tweed, action.username, action.id, action.uid]}
        case 'TWEED_CLEAR_FOLLOW':
            return state = {tweedArray: []}
        default:
            return state=state
    }
}