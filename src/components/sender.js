import { useState, useRef } from 'react';

function Sender({message}) {
    return (
    <p className='sender'>{message}</p>
  );
}

export default Sender;
