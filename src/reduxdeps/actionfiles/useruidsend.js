export function userUidSend (uid, emailAddress, username) {
    return {
        type: 'LOGGED_IN',
        uid,
        emailAddress,
        username
    }
}