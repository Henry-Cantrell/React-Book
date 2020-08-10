export function counterReducer (state=null, action) {
    switch (action.type) {
        case 'COUNTER_SEND':
            return state=action.counter
        default:
            return state=state
    }
}