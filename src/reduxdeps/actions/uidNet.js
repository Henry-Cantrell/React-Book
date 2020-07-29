export function uidNet (param, paramTwo) {
    return {
        type: 'LOGGED_IN',
        payload: param,
        payloadTwo: paramTwo,
    }
}