type ChatContent = string[];

interface ChatMessageProps {
  contents: ChatContent[];
}

const ChatMessage = ({ contents }: ChatMessageProps) => {
  return (
    <div>      
      {contents.map((items, index) => (
        <div key={index} className="d-flex">
          <div className="avatar">
            Здесь аватарка бота
          </div>
          <div className="d-flex flex-column">
            {items.map((text, innerIndex) => (
              <div
                key={innerIndex}
                className="rounded p-3 shadow mb-3"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      ))}   
    </div>
  )
}


export default ChatMessage
