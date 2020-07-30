export function blbSobReducer (state=false, action) {
    switch (action.type){
        case 'SHOW_BOX':
            return state=true
        default:
            return state=state
    }
}