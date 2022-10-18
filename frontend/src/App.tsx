import React from 'react';
import HomePage from './pages/HomePage';
import * as io from "socket.io-client";

const socket = io.connect('http://localhost:5000')

const App: React.FC = () => {
    return (
    <>
        <HomePage socket={socket} />
    </>
  )
}

export default App;
