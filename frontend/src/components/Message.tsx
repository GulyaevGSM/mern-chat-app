import {
    AddImage,
    ImageMessage,
    InputMessage,
    MessageTemplate,
    RemoveImage,
    SendMessage,
    TypeMessage
} from "../styles/Message.style";
import {IoIosAddCircleOutline} from "react-icons/io";
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import React, {ChangeEvent, useRef, useState} from "react";
import {addMessage} from "../http/requests.http";
import {$instance} from "../http/$axios";
import {Socket} from "socket.io-client";

interface IMessage {
    socket: Socket
}

export const Message = ({socket}: IMessage) => {
    const [value, setValue] = useState('')
    const [file, setFile] = useState<any>(null)

    const inputFileRef = useRef<any>( null );

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const keyHandler = async (e: React.KeyboardEvent<HTMLElement>) => {
        if(file) {
            const data = new FormData()
            data.append('file', file)
            data.append('upload_preset', 'uploads')
            try {
                const uploadRes = await $instance.post('https://api.cloudinary.com/v1_1/gsmuzumaki/image/upload', data)

                const {url} = uploadRes.data
                await addMessage(url)
                socket.emit('send_message', url)
                setValue('')
                setFile(null)
            } catch (e: any) {
                console.log(e)
            }
        } else if(e.key === 'Enter' && value.trim() !== '') {
            await addMessage(value)
            socket.emit('send_message', (value))
            setValue('')
        }
    }

    const clickHandler = async (e: React.MouseEvent<HTMLElement>) => {

        if(file) {
            const data = new FormData()
            data.append('file', file)
            data.append('upload_preset', 'uploads')
            try {
                const uploadRes = await $instance.post('https://api.cloudinary.com/v1_1/gsmuzumaki/image/upload', data)

                const {url} = uploadRes.data
                await addMessage(url)
                socket.emit('send_message', url)
                setValue('')
                setFile(null)
            } catch (e: any) {
                console.log(e)
            }
        } else if(value.trim() !== '') {
            await addMessage(value)
            socket.emit('send_message', value)
            setValue('')
        }

    }

    const onBtnClick = () => {
        inputFileRef.current.click()
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            height: '95%',
        }}>
            <MessageTemplate>
                <AddImage>
                    <input
                        style={{display: 'none'}}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFile(e.target.files![0])}
                        type="file"
                        id="button-file"
                        className={'input-file'}
                        ref={inputFileRef}
                    />
                    <IoIosAddCircleOutline
                        onClick={onBtnClick}
                        size={32}
                        color='#3889e7'
                    />
                </AddImage>
                {
                    file ? (
                        <ImageMessage>
                            <RemoveImage
                                onClick={() => setFile(null)}
                            >
                                <AiFillCloseSquare />
                            </RemoveImage>
                            <div>
                                {file ? file.name : ''}
                            </div>
                        </ImageMessage>
                    ) : (
                        <TypeMessage>
                            <InputMessage
                                placeholder={'Сообщение'}
                                value={value}
                                onChange={changeHandler}
                                onKeyPress={keyHandler}
                            />
                        </TypeMessage>
                    )
                }
                <SendMessage
                    onClick={clickHandler}
                >
                    <BsFillArrowUpCircleFill
                        color={'#3889e7'}
                        size={27}
                    />
                </SendMessage>
            </MessageTemplate>
        </div>
    )
}