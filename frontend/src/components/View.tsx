import {CurrentImage, CurrentMessage, MessageTime, UnMessageBlock, ViewTemplate} from "../styles/View.style";
import React, {useEffect, useState} from "react";
import {$instance} from "../http/$axios";
import {IMessages, IView} from "../types/types"
import ScrollToBottom from 'react-scroll-to-bottom'
import {format} from "timeago.js"

export const View = ({socket}: IView) => {
    const [messages, setMessages] = useState<IMessages[]>([])

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await $instance.get('/api/messages/getmsg')

            setMessages(res.data)
        }

        fetchMessages()
    }, [])

    useEffect(() => {
        socket.on('receive_message', (message) => {
            setMessages(prevState => [...prevState, message])
        })
    }, [socket])

    return (
        <ViewTemplate>
                <ScrollToBottom>
                    <UnMessageBlock>
                        {
                            messages.map((msg, i) => (
                                <div key={i}>
                                    <CurrentMessage>
                                        {
                                            msg.content.includes('gsmuzumaki') ?
                                                <CurrentImage src={msg.content} alt=""/> : (
                                                    <div>
                                                        {msg.content}
                                                    </div>
                                                )
                                        }
                                        <MessageTime>
                                            {format(msg.createdAt)}
                                        </MessageTime>
                                    </CurrentMessage>
                                </div>
                            ))
                        }
                    </UnMessageBlock>
                </ScrollToBottom>
        </ViewTemplate>
    )
}