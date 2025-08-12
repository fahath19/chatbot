import React, { useState } from "react"
const Dashboard = ()=>{
          const [data,setdata]=useState([]);
         const [isclienclicked,setclientclicked]=useState(false);
    async function handlejobapi(){
        setclientclicked(false)

            try{
                
                const response=await fetch("http://localhost:3000/api/jobseeker");
                if(!response.ok) { 
                    console.log("error in handleapi");
                }
                const jsondata=await response.json();
                setdata(jsondata);
                console.log(data);
                

            }
            catch(err){
                console.log("cannot get the data");
                
            }
    }

    async function handleclientapi(){
        setclientclicked(true)
        try{
            
            const response=await fetch("http://localhost:3000/api/clientdata");
            if(!response.ok) { 
                console.log("error in handleapi");
            }
            const jsondata=await response.json();
            setdata(jsondata);
            console.log(data);
            

        }
        catch(err){
            console.log("cannot get the data");
            
        }
}
     return(
        <div>
            {/* SIDBAR */}
            <div className=" shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)]  fixed h-[100vh] w-[230px] ">
                <div className="p-4">
                <button className=" w-[200px]  my-[1rem] bg-blue-700 text-[white] hover:bg-blue-600 p-3 rounded-[10px]" onClick={handlejobapi}>Job Seeker Information</button>
                <button className=" w-[200px]  bg-blue-700 text-[white] hover:bg-blue-600 p-3 rounded-[10px] " onClick={handleclientapi}> Client information</button>
                </div>
              
            </div>

            <div className="ml-[20%] pt-[8%]">


            { 
            isclienclicked ? 
            <table className="border-2 ">
            <tr className="border-2 border-blue-300">

                <th className="p-[10px]">No</th> 
                <th className="p-[10px]">Service</th>
                <th className="p-[10px]">Name</th>
                <th className="p-[10px]">Email</th>
                <th className="p-[10px]">Phone</th>
                <th className="p-[10px]">Budget</th>
                <th className="p-[10px]">Project Description</th>
                <th className="p-[10px]">Date</th>

            </tr>

            { data.map((item,index)=> 
               <tr key={item._id} className="p-[1rem] border-b border-gray-500"> 
               <td  className=" p-[1rem]" >{index+1}</td> 
               <td  className=" p-[1rem]" >{item.service}</td> 
               <td  className=" p-[1rem]" >{item.name}</td> 
               <td  className="p-[1rem]">{item.email}</td> 
               <td  className="p-[1rem]">{item.phone}</td> 
               <td  className="p-[1rem]">{item.budget}</td> 
               <td  className="p-[1rem]">{item.descript}</td> 
               <td  className="p-[1rem]">{item.createdAt}</td> 

               
               </tr>    
        )
            }
        </table>

        :
        
           (data.length<=0) ? <></>  :  <table className="border-2 ">
           <tr className="border-2 border-blue-300">

               <th className="p-[10px]">No</th> 
               <th className="p-[10px]">Job Role</th> 
               <th className="p-[10px]">Name</th>
               <th className="p-[10px]">Email</th>
               <th className="p-[10px]">Phone</th>
               <th className="p-[10px]">Date</th>

           </tr>

           { data.map((item,index)=> 
              <tr key={item._id} className="p-[1rem] border-b border-gray-500"> 
              <td  className=" p-[1rem]" >{index+1}</td> 
              <td  className=" p-[1rem]" >{item.service}</td> 

              <td  className=" p-[1rem]" >{item.name}</td> 
              <td  className="p-[1rem]">{item.email}</td> 

              <td  className="p-[1rem]">{item.phone}</td> 
              <td  className="p-[1rem]">{item.createdAt}</td> 

              
              </tr>    
       )
           }
       </table>
        
        

        
        
        
        
        }
            
            </div>
           
        </div>
     )
}
export default Dashboard;