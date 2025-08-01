import React, { useRef } from 'react'
import { IoArrowUpSharp } from "react-icons/io5";
const Chatuserform = ({chathistory,setchathistory,generateBotResponse}) => {
    const inputRef=useRef();
    const handleformsubmit=(e)=>{
           e.preventDefault();
           const usermessage=inputRef.current.value.trim();
           if(!usermessage) return;
           inputRef.current.value="";
         
           setchathistory(history => [...history,{role:"user",text:usermessage}]);
           
           setTimeout(()=> {
            
            
            setchathistory(history => [...history,{role:"model",text:"Thinking..."}]);
            

//  CALL THE FUCTION TO GENERATE THE BOT RESPONSE
            generateBotResponse([...chathistory,{role:"user",text:usermessage}]);
           }
            ,600)

        

           
    }
  return (
    <div>
      <form action="#" className='chat-form' onSubmit={handleformsubmit}>
                    <input ref={inputRef} type="text" placeholder='messge...' className='message-input' required />
      
                    <button className=''>
                  <IoArrowUpSharp/>
                </button>
                </form>
    </div>
  )
}

export default Chatuserform
