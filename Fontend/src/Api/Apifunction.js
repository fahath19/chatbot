export const projectapi= async (formData)=>{
  
    console.log("api function ", formData);
    


    try{
    const response= await fetch("http://localhost:3000/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data=await response.json();

      console.log(data,"successfull stored data in db");
      
   }
   catch(err){
    console.error("Error:", err);
    console.log("THERE WAS A PROBLEM STORE IN DATABASE.");
    
   }

}

export const jobapi= async (formData)=>{
  
  console.log("api function ", formData);
  


  try{
  const response= await fetch("http://localhost:3000/api/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const data=await response.json();

    console.log(data,"successfull stored data in db");
    
 }
 catch(err){
  console.error("Error:", err);
  console.log("THERE WAS A PROBLEM STORE IN DATABASE.");
  
 }

}