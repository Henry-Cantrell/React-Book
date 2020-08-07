export function tweedCatch (state = {tweedArray: []}, action) {
    switch (action.type){
        case 'TWEED_SEND':
            return {...state, tweedArray: [...state.tweedArray, action.tweed]}
        case 'TWEED_CLEAR':
            return state = {tweedArray: []}
        default:
            return state=state
    }
}