export function uidNet (param, paramTwo, paramThree) {
    return {
        type: 'LOGGED_IN',
        payload: param,
        payloadTwo: paramTwo,
        payloadThree: paramThree,
    }
}