import { TbMessageChatbotFilled } from "react-icons/tb";
const ChatMessage = ({chat}) => {

  
  return (
    <div className={`message ${chat.role === "model" ? 'bot' : 'user' }-message`}>
        {chat.role ==="model" && <TbMessageChatbotFilled className="text-[1.5rem]"/> }
     <p
        className="message-text"
        dangerouslySetInnerHTML={{ __html: Array.isArray(chat.text) ? chat.text.join("") : chat.text }}
      />

   </div>
  )
}

export default ChatMessage
