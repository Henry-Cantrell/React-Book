export function captureAllUserInfo (state = {infoArray: []}, action) {
    switch (action.type){
        case 'SEND_ALL_USER_INFO':
            return {...state, infoArray: [...state.infoArray, action.username, action.uid, action.userBio, action.joinDate, action.followedCount, action.followerCount]}
        case 'ERASE_ALL_USER_INFO':
            return state = {infoArray: []}
        default:
            return state=state
    }
}