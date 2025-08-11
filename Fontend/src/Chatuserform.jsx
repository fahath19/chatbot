import React, { useRef } from 'react';
import { IoArrowUpSharp } from "react-icons/io5";
import { formQuestions, formjobQuestions } from './utils/company';
import { validatedata } from './Validatation/validatedata';
import { jobapi, projectapi } from './Api/Apifunction';

const Chatuserform = ({
  chathistory,
  setchathistory,
  generateBotResponse,
  formData,
  setFormData,
  formMessages,
  setFormMessages,
  isuserclicked,
  formStep,
  setFormStep,
  setuserclicked,
  questype
}) => {
  const inputRef = useRef();

  const handleformsubmit = (e) => {
    e.preventDefault();
    const usermessage = inputRef.current.value.trim();
    if (!usermessage) return;
    inputRef.current.value = "";

    if (isuserclicked) {
      const questions = questype === "job" ? formjobQuestions : formQuestions;
      const currentKey = questions[formStep].key;

      // Validate input
      if (!validatedata(currentKey, usermessage, setFormMessages)) {
        return;
      }

      // Save to form data
      setFormData(prev => ({
        ...prev,
        [currentKey]: usermessage
      }));

      // Add user's message
      setFormMessages(prev => [
        ...prev,
        { role: "user", text: usermessage }
      ]);

      // Check if more questions remain
      if (formStep < questions.length - 1) {
        const nextStep = formStep + 1;
        setFormStep(nextStep);
        setFormMessages(prev => [
          ...prev,
          { role: "model", text: questions[nextStep].question }
        ]);
      } 
      
      
      else {
        // ✅ Last step completed
        setuserclicked(false);
      
        const finalData = {
          ...formData,
          [currentKey]: usermessage
        };
      
        setFormData(finalData);
      
        setchathistory(prev => [
          ...prev,
          { role: "model", text: "✅ Thank you! Your information has been collected." }
        ]);
      
        console.log("Form data collected:", finalData);
      
        // API CALL TO STORE THE DATA IN DATABASE
        ( questype === "job" ) ? jobapi(finalData) : projectapi(finalData);

        setFormData({});
  

      }

    } else {
      // Normal chatbot mode
      setchathistory(history => [...history, { role: "user", text: usermessage }]);
      setTimeout(() => {
        setchathistory(history => [...history, { role: "model", text: "Thinking..." }]);
        generateBotResponse([...chathistory, { role: "user", text: usermessage }]);
      }, 200);
    }
  };

  return (
    <div>
      <form action="#" className='chat-form' onSubmit={handleformsubmit}>
        <input ref={inputRef} type="text" placeholder='message...' className='message-input' required />
        <button>
          <IoArrowUpSharp />
        </button>
      </form>
    </div>
  );
};

export default Chatuserform;
