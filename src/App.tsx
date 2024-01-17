import { useState } from 'react';
import { Step } from './interfaces/Step';
import ChatMessage from './ChatMessage';

interface appProps {
  steps: Step[]
}

const App = ({ steps }: appProps): JSX.Element => {
  
  const initStep: Step | undefined = steps.find((step) => {
    return step.id === 'welcome'
  });

  const [currState, setCurrState] = useState(initStep);
  const [messages, setMessages] = useState<string[][]>(initStep?.messages ? [initStep.messages] : [])


  const handleClick = (nextStep: string) => {
    const res = steps.find((step) => step.id === nextStep);

    if (res) {
      setMessages([...messages, res.messages]);
      setCurrState(res);
    }
  }

  return (
    <>
      <div className='container'>
        {messages.map((contents, index) => (
          <ChatMessage key={index} contents={[contents]} />
        ))}
        {currState && currState.buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn.nextStepId)}
            className='btn btn-primary'
          >
            {btn.text}
          </button>
        ))}

      </div>
    </>
  )
}

export default App
