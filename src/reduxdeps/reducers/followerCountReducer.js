export function followerCountReducer (state = 0, action) {
    switch (action.type) {
        case 'FOLLOWER_SEND':
            return state=action.count
        case 'FOLLOWER_AND_FOLLOWED_CLEAR':
            return state = 0
        default:
            return state=state
    }
}