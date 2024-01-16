import { useState } from 'react';
import state from './state';

interface button {
  text: string,
  next_state_id: string,
  type: string,
}
interface state {
  id: string,
  message: string,
  buttons:button[]
}

function App() {
  
  const start = state.find((item) => {
    return item.id === 'welcome'
  });

  const [currState, setCurrState] = useState(start);
  const [messages, setMessages] = useState([start?.message])


  const handleClick = (nextState: string) => {
    const res = state.find((item) => item.id === nextState);

    if (res) {
      setMessages([...messages, res.message]);
      setCurrState(res);
    }
  }

  return (
    <>
      <div>
        {messages.map((item) => (
          <p>{ item}</p>
        ))}
        {currState.buttons.map((btn) => (
          <button
            onClick={() => handleClick(btn.next_state_id)}
          >
            {btn.text}
          </button>
        ))}

      </div>
    </>
  )
}

export default App
