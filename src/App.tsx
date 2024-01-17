import { useState } from 'react';
import { Step } from './interfaces/Step';

interface appProps {
  steps: Step[]
}

const App = ({ steps }: appProps): JSX.Element => {
  
  const initStep: Step | undefined = steps.find((step) => {
    return step.id === 'welcome'
  });

  const [currState, setCurrState] = useState(initStep);
  const [messages, setMessages] = useState([initStep?.message])


  const handleClick = (nextStep: string) => {
    const res = steps.find((step) => step.id === nextStep);

    if (res) {
      setMessages([...messages, res.message]);
      setCurrState(res);
    }
  }

  return (
    <>
      <div>
        {messages.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        {/* {console.log(messages)} */}
        {currState && currState.buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn.nextStepId)}
          >
            {btn.text}
          </button>
        ))}

      </div>
    </>
  )
}

export default App
