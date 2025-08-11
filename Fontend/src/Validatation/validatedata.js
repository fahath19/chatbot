export function validatedata(currentKey, value, setFormMessages) {
    // Name validation
    if (currentKey === "name") {
      const nameRegex = /^[A-Za-z\s]{2,50}$/;
      if (!nameRegex.test(value.trim())) {
        setFormMessages(prev => [
          ...prev,
          { role: "model", text: "❌ That doesn't look like a valid name. Please enter your full name." }
        ]);
        return false; // stop here
      }
    }
  
    // Email validation
    if (currentKey === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        setFormMessages(prev => [
          ...prev,
          { role: "model", text: "❌ Please enter a valid email address." }
        ]);
        return false;
      }
    }
  
    // More validations for other keys can go here...
  
    return true; // passes validation
  }