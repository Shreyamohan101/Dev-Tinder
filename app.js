const express = require('express');
const app = express();
app.use("/new", (req, res) => {
    res.end("Hello World, you are at new!");
        
    })
app.use("/test", (req,res) => {
    res.end("Hello sr");
})

app.use("/sign", (req, res) => {
 res.end("Hello!! you are at signing page!");

})

app.listen(3000,() => {
    console.log('Server is running on port 3000');
    
})