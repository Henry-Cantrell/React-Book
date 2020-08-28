export let profilePageToggle = (state=false, action) => {
    switch (action.type) {
        case 'TOGGLE_PROFILE':
            return state=true;
        case 'TOGGLE_OFF_ALL':
            return state=false;
        case 'TOGGLE_OFF_ALL_EXCEPT_EXPLORE':
            return state=false;
        case 'TOGGLE_OFF_ALL_EXCEPT_HOMEPAGE':
            return state=false;
        default:
            return state
    }}
