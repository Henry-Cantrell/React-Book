export let homePageToggle = (state=true, action) => {
    switch (action.type) {
        case 'TOGGLE_HOMEPAGE':
            return state=true;
        case 'TOGGLE_OFF_ALL':
            return state=false;
        case 'TOGGLE_OFF_ALL_EXCEPT_PROFILE':
            return state=false;
        case 'TOGGLE_OFF_ALL_EXCEPT_EXPLORE':
            return state=false;
        default:
            return state
    }
}