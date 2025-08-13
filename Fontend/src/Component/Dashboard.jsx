import React, { useState } from "react"

const Dashboard = () => {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [isclienclicked, setclientclicked] = useState(false);

  async function handlejobapi() {
    setclientclicked(false);
    try {
      const response = await fetch("https://chatbot-9xlk.onrender.com/api/jobseeker");
      if (!response.ok) {
        console.log("error in handleapi");
      }
      const jsondata = await response.json();
      setdata(jsondata);
    } catch (err) {
      console.log("cannot get the data");
    }
  }

  async function handleclientapi() {
    setclientclicked(true);
    try {
      const response = await fetch("https://chatbot-9xlk.onrender.com/api/clientdata");
      if (!response.ok) {
        console.log("error in handleapi");
      }
      const jsondata = await response.json();
      setdata2(jsondata);
    } catch (err) {
      console.log("cannot get the data");
    }
  }

  return (
    <div>
      {/* SIDEBAR */}
      <div className="shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] fixed h-[100vh] w-[230px]">
        
        <div className="p-4">
           <h2 className="text-[1.4rem]">Wezan Technologies</h2>
          <button
            className="w-[200px] my-[1rem] bg-blue-700 text-[white] hover:bg-blue-600 p-3 rounded-[10px]"
            onClick={handlejobapi}
          >
            Job Seeker Information
          </button>
          <button
            className="w-[200px] bg-blue-700 text-[white] hover:bg-blue-600 p-3 rounded-[10px]"
            onClick={handleclientapi}
          >
            Client Information
          </button>
        </div>
      </div>

      <div className="ml-[20%] pt-[8%]">
        {isclienclicked ? (
          // Client table
          data2.length <= 0 ? (
            <h2 className="text-center">Click The dashboard button to View the Information</h2>
          ) : (
            <table className="border-2 w-[80%]">
              <thead>
                <tr className="border-2 border-blue-300 bg-blue-800 text-white">
                  <th className="p-[10px]">No</th>
                  <th className="p-[10px]">Service</th>
                  <th className="p-[10px]">Name</th>
                  <th className="p-[10px]">Email</th>
                  <th className="p-[10px]">Phone</th>
                  <th className="p-[10px]">Budget</th>
                  <th className="p-[10px]">Project Description</th>
                  <th className="p-[10px]">Date</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item, index) => (
                  <tr key={item._id} className="p-[1rem] border-b border-gray-500 " >
                    <td className="p-[1rem]">{index + 1}</td>
                    <td className="p-[1rem]">{item.service}</td>
                    <td className="p-[1rem]">{item.name}</td>
                    <td className="p-[1rem]">{item.email}</td>
                    <td className="p-[1rem]">{item.phone}</td>
                    <td className="p-[1rem]">{item.budget}</td>
                    <td className="p-[1rem]">{item.descript}</td>
                    <td className="p-[1rem]">{item.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        ) : (
          // Job seeker table
          data.length <= 0 ? (
            <h2 className="text-center">Click The dashboard button to View the Information</h2>
          ) : (
            <table className="border-2">
              <thead>
                <tr className="border-2 border-blue-300">
                  <th className="p-[10px]">No</th>
                  <th className="p-[10px]">Job Role</th>
                  <th className="p-[10px]">Name</th>
                  <th className="p-[10px]">Email</th>
                  <th className="p-[10px]">Phone</th>
                  <th className="p-[10px]">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item._id} className="p-[1rem] border-b border-gray-500">
                    <td className="p-[1rem]">{index + 1}</td>
                    <td className="p-[1rem]">{item.service}</td>
                    <td className="p-[1rem]">{item.name}</td>
                    <td className="p-[1rem]">{item.email}</td>
                    <td className="p-[1rem]">{item.phone}</td>
                    <td className="p-[1rem]">{item.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
