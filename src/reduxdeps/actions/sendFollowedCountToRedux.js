export function sendFollowedCount (count) {
    return ({
        type: 'FOLLOWED_SEND',
        count
    })
}