type ChatContent = string[];

interface ChatMessageProps {
  contents: ChatContent[];
}

const ChatMessage = ({ contents }: ChatMessageProps) => {
  return (
    <div>      
      {contents.map((items) => items.map((text, index) => (
        <p key={index}>{text}</p>
      )))}   
    </div>
  )
}

export default ChatMessage
