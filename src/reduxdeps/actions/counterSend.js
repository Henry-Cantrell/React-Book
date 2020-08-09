export function counterSend (counter) {
    return ({
        type: 'COUNTER_SEND',
        counter
    })
}