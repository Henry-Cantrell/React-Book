export function receiveFollowTweeds(state = {tweedArray: []}, action) {
    switch (action.type) {
        case 'SEND_FOLLOW_TWEEDS':
            return {...state, tweedArray: [...state.tweedArray, action.tweed, action.uid, action.id, action.username]}
        default:
            return state=state
    }
}