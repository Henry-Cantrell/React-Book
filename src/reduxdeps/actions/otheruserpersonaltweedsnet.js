export function otherUserPersonalTweeds (uid,id,username,tweed) {
    return ({
        type: 'OTHER_USER_PERSONAL',
        uid,
        id,
        username,
        tweed
    })
}