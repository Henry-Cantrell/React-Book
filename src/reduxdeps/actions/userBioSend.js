import React from 'react'

export function userBioSend (param) {
    return ({
        type: 'USER_BIO_SEND',
        payload: param,
    })
}