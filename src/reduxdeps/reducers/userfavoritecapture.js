export function userFavCapture (state = {tweedArray: []}, action) {
    switch (action.type){
        case 'TWEED_SEND_USER_FAV':
            return {...state, tweedArray: [...state.tweedArray, action.tweed, action.username, action.id, action.uid]}
        case 'TWEED_CLEAR_USER_FAV':
            return state = {tweedArray: []}
        default:
            return state=state
    }
}