import React from 'react'

export function MODAL_USER_PROFILE (props) {
    return (
        <div class="show_modal">
            <div class='modal_box'>
                <div class='toggleButton' onClick={props.hide}>Hide</div>
            </div>
        </div>
    )
}