import { TbMessageChatbotFilled } from "react-icons/tb";
const ChatMessage = ({chat}) => {
  return (
    <div className={`message ${chat.role === "model" ? 'bot' : 'user' }-message`}>
        {chat.role ==="model" && <TbMessageChatbotFilled className="text-[1.5rem]"/> }
    <p className='message-text'>
        {chat.text}
    </p>

   </div>
  )
}

export default ChatMessage
