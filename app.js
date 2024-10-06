const express = require('express');
const app = express();
// app.use("/new", (req, res) => {
//     res.end("Hello World, you are at new!");
// })
app.get("/user", (req, res) => {
    res.json({"firstname": "John", "lastname": "apoa"});  // Use res.json to send JSON data
});
app.get("/ab?c" , (req, res) => {
    res.end("Hello World, you are at ab?c!");
});

    app.post("/user", (req, res) => {
        res.end("User added successfully");      
    })
    app.put("/user", (req,res) => {
        res.end("User updated successfully");      
    })
    app.delete("/user", (req,res) => {
        res.end("User deleted successfully");      
    })

// app.use("/test", (req,res) => {
//     res.end("Hello sr");
// })

// app.use("/sign", (req, res) => {
//  res.end("Hello!! you are at signing page!");

// })

app.listen(3000,() => {
    console.log('Server is running on port 3000');
    
})