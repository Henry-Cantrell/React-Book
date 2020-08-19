export function sendAllUserTweeds (uid,id,username,tweed) {
    return ({
        type: 'SEND_ALL_USER_TWEEDS',
        uid,
        id,
        username,
        tweed
    })
}