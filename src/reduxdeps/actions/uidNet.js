export function uidNet (uid, emailAddress, username) {
    return {
        type: 'LOGGED_IN',
        uid,
        emailAddress,
        username
    }
}