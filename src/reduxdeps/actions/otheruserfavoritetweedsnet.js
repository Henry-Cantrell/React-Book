export function otherUserFavTweeds (uid,id,username,tweed) {
    return ({
        type: 'OTHER_USER_FAVS',
        uid,
        id,
        username,
        tweed
    })
}