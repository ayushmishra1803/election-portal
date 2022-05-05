const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://ayush1803:ayush1803@cluster0.ngk4p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
).then(res=>{
    console.log("database connected");
})
