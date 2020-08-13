export function sendFollowerCount (count) {
    return ({
        type: 'FOLLOWER_SEND',
        count
    })
}