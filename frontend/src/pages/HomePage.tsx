import React from "react";
import {BottomBorder, HomeTemplate} from "../styles/Home.style";
import {Message} from "../components/Message";
import {View} from "../components/View";
import {Socket} from "socket.io-client";

type TApp = {
    socket: Socket
}

const App = ({socket}: TApp) => {

    return (
        <HomeTemplate>
            <View socket={socket} />
            <Message socket={socket} />
            <BottomBorder />
        </HomeTemplate>
    )
}

export default App;
