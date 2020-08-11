export function tweedCatchGlobal (state = {tweedArray: []}, action) {
    switch (action.type){
        case 'TWEED_SEND_GLOBAL':
            return {...state, tweedArray: [...state.tweedArray, action.tweed, action.created, action.uid]}
        case 'TWEED_CLEAR_GLOBAL':
            return state = {tweedArray: []}
        default:
            return state=state
    }
}