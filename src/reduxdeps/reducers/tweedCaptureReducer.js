export function tweedCatch (state = {}, action) {
    switch (action.type){
        case 'TWEED_SEND':
            return {...state, tweed:action.tweed}
        default:
            return state=state
    }
}