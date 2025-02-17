import { useState, useRef, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hola, ¿cómo estás?' },
        { id: 2, text: '¡Bien, gracias! ¿Y tú?' }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMsg = {
                id: messages.length + 1,
                text: newMessage
            };
            setMessages(prevMessages => [...prevMessages, newMsg]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div style={styles.chatContainer}>
            <div style={styles.messagesContainer}>
                {messages.map(message => (
                    <div key={message.id} style={styles.message}>
                        {message.text}
                    </div>
                ))}
                <a ref={messagesEndRef} />
            </div>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    style={styles.input}
                />
                <button onClick={handleSendMessage} style={styles.button}>Enviar</button>
            </div>
        </div>
    );
};

const styles = {
    chatContainer: {
        width: '300px',
        height: '400px',
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'center',
        backgroundColor: '#2a2c52'
    },
    messagesContainer: {
        flex: 1,
        padding: '10px',
        overflowY: 'auto',
    },
    message: {
        marginBottom: '10px',
        padding: '5px',
        backgroundColor: '#f1f1f1',
        borderRadius: '5px',
        color: 'black'
    },
    inputContainer: {
        display: 'flex',
        padding: '10px',
    },
    input: {
        flex: 1,
        padding: '5px',
        color: 'black'
    },
    button: {
        padding: '5px 10px',
    },
};

export default Chat;
