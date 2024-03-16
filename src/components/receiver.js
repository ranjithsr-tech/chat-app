import { useState, useRef } from 'react';

function Receiver({message}) {
    return (
    <p className='receiver'>Receiver - Message{message}</p>
  );
}

export default Receiver;
