import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('16895cc9-8ee2-407c-abe6-8c6720b49fcb',
        props.user.username,
        props.user.secret)

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} styles={{ height: '100vh' }} />

        </div>
    )
}

export default ChatsPage