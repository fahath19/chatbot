const mongoose=require("mongoose");

const  mongodb= async ()=>{
    await mongoose.connect("mongodb+srv://bahadabdul539:Xgh2oPcHnXVOV9In@x.fnj2y.mongodb.net/Wezanchatbotdb");
}
module.exports=mongodb;