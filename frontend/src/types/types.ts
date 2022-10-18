import {Socket} from "socket.io-client";

export interface IMessages {
    _id: any,
    content: string
    img: string
    createdAt: any;
}

export interface IView {
    socket: Socket
}