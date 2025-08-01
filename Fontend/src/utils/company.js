export const wezanBotinfo = {
    botName: "WezanBot",
    companyName: "Wezan Technologies",
    flows: {
      clientProjectInquiry: [

        
        {
          role: "client",
          says: "Hai hello hi"
        },
        {
          role: "bot",
          intent: "Hai hello hi how are you",
          replies: [
            "👋 Hai! I am Wezan Chatbot 🤖. I can help you with 💼 job descriptions, 🧑‍💻 job roles, and 📦 project inquiries.",
            
          ]
        },
        {
          role: "client",
          says: "Can you tell me about your services?"
        },
        {
          role: "bot",
          intent: "Can you tell me about your services?,What services do you offer?,Tell me about your development services,Do you develop apps? ,project inquiries, your services, service projec inqueries"
          ,
          replies: [
            "📱 We specialize in developing custom mobile and web applications tailored to your business needs.",
            "🛠️ Our services include full-stack web development, mobile app development, and UI/UX design.",
            "🚀 From concept to deployment, we build scalable and performance-driven digital solutions.",
            "Would you like to schedule a free consultation or request a project quote?"
          ]
        },
        {
          role: "client",
          says: "Yes, please show me your portfolio."
        },
        {
          role: "bot",
          intent: "Yes, please show me your portfolio.,show your portfolio"
          ,
          replies: [
            "✅ TrendMart – A modern fashion store built with React & Firebase",
            "✅ GroceryHub – A grocery delivery app with real-time order tracking",
            "View full portfolio: [Portfolio](#)",
            "Would you like to get a quote or schedule a call?"
          ]
        },
        {
          role: "client",
          says: "How much would a project like this cost?"
        },
        {
          role: "bot",
          intent: "How much would a project like this cost?",
          replies: [
            "We offer three pricing models:",
            "- 💼 Fixed cost (for defined scope)",
            "- ⏱️ Hourly billing (for flexible work)",
            "- 👨‍💻 Dedicated developer (monthly)",
            "Want to schedule a free consultation? [Book a Call](#)"
          ]
        },
        {
          role: "client",
          says: "Yes, please book a call."
        },
        {
          role: "bot",
          intent: "Yes, please book a call., contact , how to contact you ,how i contact ,Hey, how do I contact you?",
          replies: [
            "📅 Please pick a time from our calendar: [Calendly](#)",
            "📧 Or email us at: contact@wezantech.com"
          ]
        }
      ],
      jobSeekerInquiry: [
        {
          role: "jobSeeker",
          says: "Hi, are there any job openings?"
        },
        {
          role: "bot",
          intent: "Hi, are there any job openings?, job description ,job descriptions,give a job descriptions, give job descriptions, give me a job description ,give me a job descriptions , give your job descriptions",
          replies: [
            "Yes! We're currently hiring Full-Stack Developers (React + Node).",
            "Experience: 0–2 years — freshers welcome!",
            "Apply here: [Apply Now](#)",
            "Want to see the job description?"
          ]
        },
        {
          role: "jobSeeker",
          says: "Yes, share the job details."
        },
        {
          role: "bot",
          intent: "Yes, share the job details, job details , job detail , share job detail ,share job details , share the job detail job role,job roles ",
          replies: [
            "🧩 Position: Full-Stack Developer",
            "🕓 Experience: 0–2 years",
            "📍 Location: Remote / Noida",
            "💼 Skills: React, Node.js, Git, MongoDB",
            "📅 Last Date to Apply: August 20, 2025"
          ]
        },
        {
          role: "jobSeeker",
          says: "Can I apply if I'm a fresher?"
        },
        {
          role: "bot",
          intent: "Can I apply if I'm a fresher?",
          replies: [
            "Absolutely! We encourage freshers to apply — especially if you’ve built projects or have a GitHub portfolio.",
            "Upload your resume here: [Apply Now](#)"
          ]
        },
        {
          role: "jobSeeker",
          says: "Any tips for preparing the interview?"
        },
        {
          role: "bot",
          intent: "Any tips for preparing the interview?",
          replies: [
            "Sure! Here’s how to prepare:",
            "✅ Focus on JavaScript, React, Node basics",
            "✅ Be ready to explain your own projects",
            "✅ Know Git, REST APIs, and basic data structures"
          ]
        }
      ]
    }
  };
  