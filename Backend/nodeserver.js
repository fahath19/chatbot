const express=require('express');
const app=express();
const cors=require("cors");
const mongodb=require("./config/database");
app.use(express.json());
app.use(cors());
const Client=require("./model/client");
const Jobseeker=require("./model/jobseeker")




// Sample POST Route to Save Client
app.post('/api/project', async (req, res) => {
  try {
    const {service, name, phone,email,   descript,budget } = req.body;

    const client = new Client({
      service,
      name,
      phone,
      email,
      descript,
      budget
    });

    await client.save();
    res.status(201).json({ message: 'Client saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save client', details: err.message });
  }
});


app.post('/api/job', async (req, res) => {
  try {
    const {service, name, phone,email } = req.body;

    const jobseeker = new Jobseeker({
      service,
      name,
      phone,
      email
    });

    await jobseeker.save();
    res.status(201).json({ message: 'Client saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save client', details: err.message });
  }
});





// SERVER STARTING 

mongodb().then(()=>{
      console.log("database connected");
      
    app.listen(3000,()=>{
        console.log("server is started");
        
    })}
)

.catch(er=>console.log("database not connect")
)
