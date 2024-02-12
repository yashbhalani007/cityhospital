import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

function Chat(props) {

    const socket  = io('http://localhost:5000');

    useEffect(() => {
        socket.on("hello", (msg) => {
            console.log(msg); 
            // io.emit('chat message' , msg)
          });
    },[])

    return (
        <div>
            
        </div>
    );
}

export default Chat;