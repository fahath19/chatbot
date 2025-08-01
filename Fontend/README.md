# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





GEMINI API CONNECTING LOGIC

 const requestoption={
            method:"POST",
            header:{"Content-Type":"application/json"},
            body: JSON.stringify({contents:history})
        }

        try{
            const response=await fetch(import.meta.env.VITE_API_URL,requestoption);
            const data=await response.json();
            if(!response.ok) throw new Error(data.error.message || "something went wrong");
            
            const apiResponseText=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateHistory(apiResponseText)
        }
        catch(err){
         console.log(err);

        }


        service_q8nisa1














        const exportChatAsTextPDF = async (chatHistory) => {
      if (!chatHistory || chatHistory.length === 0) {
        console.error("❌ No chat history provided");
        return;
      }
    
      const pdf = new jsPDF();
      const margin = 10;
      let y = margin;
      const lineHeight = 10;
      const maxLineWidth = 180;
    
      chatHistory.forEach((msg) => {
        const isUser = msg.role === "user";
        const prefix = isUser ? "🧑‍💻 User: " : "🤖 Chatbot: ";
    
        // ✅ Convert to plain string
        const fullText = prefix + (Array.isArray(msg.text) ? msg.text.join(" ") : msg.text);
    
        const lines = pdf.splitTextToSize(fullText, maxLineWidth);
    
        lines.forEach((line) => {
          if (y + lineHeight > 280) {
            pdf.addPage();
            y = margin;
          }
          pdf.text(line, margin, y);
          y += lineHeight;
        });
      });
    
      const blob = pdf.output("blob");
    
      const formData = new FormData();
      formData.append("file", blob, "chat-history.pdf");
    
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          body: formData,
        });
    
        if (response.ok) {
          console.log("✅ Sent PDF via email");
        } else {
          console.error("❌ Failed to send PDF:", await response.text());
        }
      } catch (err) {
        console.error("❌ Network error:", err);
      }
    };

--------------------------------------------------------


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
          const response = await fetch("http://localhost:5000/send-email", {
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
