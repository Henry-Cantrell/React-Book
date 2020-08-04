export function tweedCatch (state = [], action) {
    switch (action.type){
        case 'TWEED_SEND':
            state += action.payload
        default:
            state=state
    }
}