export let otherUserProfileToggleFavorite = (state=false, action) => {
    switch (action.type) {
        case 'TOGGLE_OTHER_PROFILE_FAV_ON':
            return state=true
        case 'TOGGLE_OTHER_PROFILE_FAV_OFF':
            return state=false
        default:
            return state
    }
}