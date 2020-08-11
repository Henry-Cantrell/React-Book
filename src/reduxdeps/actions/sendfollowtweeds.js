export function sendFollowTweeds (tweed, uid, id, username) {
    return ({
        type: 'SEND_FOLLOW_TWEEDS',
        tweed,
        uid,
        id,
        username
    })
}