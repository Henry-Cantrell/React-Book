export function tweedCatch (state = {tweedArray: []}, action) {
    switch (action.type){
        case 'TWEED_SEND':
            return {...state, tweedArray: [...state.tweedArray, action.tweed, action.username, action.created, action.id]}
        case 'TWEED_CLEAR':
            return state = {tweedArray: []}
        default:
            return state=state
    }
}
//note: I do not understand the spread operator used on line 4, should study further