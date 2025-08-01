import React, { useEffect, useRef, useState } from 'react'
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import {wezanBotinfo} from "./utils/company"
import Chatuserform from './Chatuserform';
import ChatMessage from './ChatMessage';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

// Set fonts for pdfMake
pdfMake.vfs = pdfFonts?.default?.pdfMake?.vfs;


const Reactchatbot = () => {
     
    const [chathistory,setchathistory]=useState([]);
    const [showchatbot,setshowchatbot]=useState([false]);

const chatbodyRef=useRef();



function getBotReply(userInput) {
    const flows = wezanBotinfo.flows;
    const allBotReplies = [
      ...flows.clientProjectInquiry,
      ...flows.jobSeekerInquiry
    ];
  
    // ✅ Ensure userInput is a string
    const input = String(userInput).toLowerCase().trim();
  
    const match = allBotReplies.find(entry =>
      entry.role === "bot" &&
      entry.intent.toLowerCase().includes(input)
    );
  
    return match ? match.replies : ["🤖 Oops! Please check your message and try again."];
  }




    const generateBotResponse=async (history)=>{

// HELPER FUNCTION O UPDATE CHAT HISTORY
         


        const updateHistory=(text)=>{
            setchathistory(prev=>[...prev.filter(msg=>msg.text !=="Thinking..."),{role:"model",text}])
    
         }
    
        const historyy=history.map(({role,text})=>({role,parts:[{text}]}));
        const usermsg=historyy[history.length-1].parts[0].text;
        
        console.log(usermsg);
        

        const result =getBotReply(usermsg);

         updateHistory(result)
         console.log(chathistory);
         
       // ✅ Auto download & send if end of chat
    if (usermsg.includes("thanks")) {
      setTimeout(() => {
         exportChatAsTextPDF(chathistory);
      }, 1000);
    }

    }

    // ---------------------------------------------

    
    const exportChatAsTextPDF = async (chatHistory) => {
      if (!chatHistory || chatHistory.length === 0) {
        console.error("❌ No chat history provided");
        return;
      }
    
      // Build chat content
      const content = [];
    
      chatHistory.forEach((msg) => {
        const isUser = msg.role === "user";
        const label = isUser ? "User:" : "Chatbot:";
        const message = Array.isArray(msg.text) ? msg.text.join(" ") : msg.text;
    
        content.push({
          columns: [
            { width: "auto", text: label, bold: true },
            { width: "*", text: message },
          ],
          margin: [0, 5],
          fontSize: 12,
        });
      });
    
      const docDefinition = {
        content,
        defaultStyle: {
          font: "Roboto", // standard font
        },
        pageMargins: [30, 40, 30, 40],
      };
    
      const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    
      // Get the PDF as Blob and send it to email
      pdfDocGenerator.getBlob(async (blob) => {
        const formData = new FormData();
        formData.append("file", blob, "chat-history.pdf");
    
        try {
          const response = await fetch("https://chatbot-84am.onrender.com/send-email", {
            method: "POST",
            body: formData,
          });
    
          if (response.ok) {
            console.log("✅ PDF sent via email successfully");
          } else {
            console.error("❌ Failed to send PDF:", await response.text());
          }
        } catch (err) {
          console.error("❌ Network error:", err);
        }
      });
    };

    //---------------------------------
    



    useEffect(()=>{
        chatbodyRef.current.scrollTo({top: chatbodyRef.current.scrollHeight, behavior:"smooth"})
      
    },[chathistory])



  return (
    <div className= {`container ${showchatbot ? 'show-chatbot':""}`} >

          <button onClick={()=>setshowchatbot(prev => !prev)} id='chatbot-toggler' className='flex boder-2 border-solid'>
            <span><FaRegMessage/></span>
            {/* <span><MdClose/></span> */}

          </button>
        
        <div className='chatbot-popup'>

            <div className='chat-header'>
                <div className='header-info'>
                    <TbMessageChatbotFilled className='text-[1.5rem] text-white'/>
                    <h2 className='logo-text'>Chatbot</h2>
                </div>

                <button onClick={()=>setshowchatbot(prev => !prev)} className='text-white text-[1.5rem]'>
                  <IoIosArrowDown/>
                </button>

            </div>

            {/* CHATBOT BODY */}

            <div className='chatbot-body' ref={chatbodyRef}>
                <div className="message bot-message">
                <TbMessageChatbotFilled className='text-[1.5rem]'/>
                 <p className="message-text">
                 👋 Hi! I'm Wezan chatbot, your virtual assistant 🤖. Let me know how I can assist you today! 💡
                 </p>

                </div>

                {/* RENDER THE CHACT */}
                <div >

                   {
                    chathistory.map((chat,index)=>(
                        <ChatMessage key={index} chat={chat} />
                    ))
                   }
                </div>
              

            </div>

            {/* CHATBOT footer */}
            <div className='chat-footer'>
                
                 <Chatuserform chathistory={chathistory} setchathistory={setchathistory} generateBotResponse={generateBotResponse}/>
            </div>

        </div>
       

    </div>
  )
}

export default Reactchatbot
