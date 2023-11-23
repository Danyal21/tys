const mongoose = require('mongosse');
require("../src/db/conn");

mongoose.connect("mongodb://localhost:27017/Cricket",{
    useCreateIndex:true,
   useNewUrlParser:true,
   useUnifiedTopology:true 
}).then(()=>{
console.log("connection is successful");
}).catch((e)=>{
console.log("No connection ");
})