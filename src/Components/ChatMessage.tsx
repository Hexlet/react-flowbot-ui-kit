import tota from '../assets/tota.png';
import { Message } from '../interfaces/ChatMessage';

const ChatMessage = ({ message }: Message) => {

  if (message.type === 'query') {
    return (
      <div className='message'>
        <img className="avatar me-auto" src={tota} alt='tota'/>
        <div className='message-body'>
          {message.contents?.map((item, index) => (<p className='mb-0' key={index}>{item}</p>))}
        </div> 
      </div>
    );
  }
      
  return (
    <div className='message message-right'>
      <div className='message-body text-white bg-primary'>
          {message.contents?.map((item, index) => (<p className='mb-0' key={index}>{item}</p>))}
        </div> 
    </div>
  );
};

export default ChatMessage;
