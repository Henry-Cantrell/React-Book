export function likedTweedsFromFollowedCapture (state = {tweedArray: []}, action) {
    switch (action.type){
        case 'TWEED_SEND_FOLLOWED_LIKED':
            return {...state, tweedArray: [...state.tweedArray, action.tweed, action.username, action.id, action.uid]}
        case 'TWEED_CLEAR_FOLLOW_LIKED':
            return state = {tweedArray: []}
        default:
            return state=state
    }
}