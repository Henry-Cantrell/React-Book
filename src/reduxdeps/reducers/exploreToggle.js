export let exploreToggle = (state=false, action) => {
    switch (action.type) {
        case 'TOGGLE_ON_EXPLORE':
            return state=true;
        case 'TOGGLE_OFF_ALL':
            return state=false;
        case 'TOGGLE_OFF_ALL_EXCEPT_PROFILE':
            return state=false;
        case 'TOGGLE_OFF_ALL_EXCEPT_HOMEPAGE':
            return state=false;
        default:
            return state
    }
}