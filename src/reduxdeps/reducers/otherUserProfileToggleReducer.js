export let toggleOtherUserProfilePageReducer = (state=false, action) => {
    switch (action.type) {
        case 'TOGGLE_OTHER_USER_PROFILE_ON':
            return state=true
        case 'TOGGLE_OTHER_USER_PROFILE_OFF':
            return state=false
        default:
            return state
    }
}