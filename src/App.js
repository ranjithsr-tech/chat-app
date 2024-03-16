import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import Sender from './components/sender';
import Receiver from './components/receiver';
function App() {
  let [messagesList, setMesagesList] = useState([])
  let [message, setMessage] = useState('');
  const textRef = useRef('')
  const sendMessage = (event) => {
    setMesagesList((messagesList) => [...messagesList, textRef.current.value])
    setMessage('')
    textRef.current.focus()
    /*
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    */
  }
  const handleSetMessage = (e) => {
    setMessage(e.currentTarget.value)
  }

  return (
    <div className="App">
      <div id='header'>Chat</div>
      <div id='mesageDisplay'>
        {messagesList.length ? (messagesList.map((item, ind) => {
          return (<><Sender message={item} /><Receiver message={ind + 1} /></>)
          // return (<><p className='sender' key={ind}>Sender - {item}</p><p className='receiver' key={ind}>Receiver - message{ind+1}</p></>)
        })) : ''}
      </div>
      <hr />
      <p id='typeMessage'><b>Type your message here:</b></p>
      <input type='text' id='messageBox' value={message} ref={textRef} onChange={handleSetMessage} />
      <button id='sendBtn' onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
