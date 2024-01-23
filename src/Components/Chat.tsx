import { useEffect, useRef, useState } from 'react';
import { Button, AppProps } from '../interfaces/Step';
import ChatMessage from './ChatMessage';

const Chat = ({ steps }: AppProps) => {

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const initStep = steps.find((step) => {
    return step.id === 'welcome';
  });

  const startMessages = { type: 'query', contents: initStep?.messages };

  const [currState, setCurrState] = useState(initStep);
  const [messages, setMessages] = useState([startMessages]);

  useEffect(() => {
    if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [currState]);

  const handleClick = (btn: Button) => {
    const nextStep = steps.find((step) => step.id === btn.nextStepId);
    const nextMessages = { type: 'query', contents: nextStep?.messages };
    const responseMessage = { type: 'response', contents: [btn.text] };

    if (nextMessages) {
      const update = messages.concat(responseMessage, nextMessages);
      setMessages(update);
    }

    if (nextStep) {
      setCurrState(nextStep);
    }
  }

  return (
    <>
      <div className='d-flex flex-column'>

        {messages && messages.map((message, index) => {
          return (
            <ChatMessage key={index} message={message } />
          )
        })}

        <div className='d-flex flex-column align-items-center mt-5'>
          {currState && currState.buttons.map((btn, index) => (
          <div key={index}>
            <button
              onClick={() => handleClick(btn)}
              className='btn btn-outline-primary mb-2'
            >
              {btn.text}
            </button>
          </div>
        ))}
        <div ref={messagesEndRef} />
        </div>

      </div>
    </>
  )
}

export default Chat
