const express = require("express");
const app = express();
const bookRoute = require("./routes/booksRoutes")
require("./connections/conn");
app.use(express.json());
app.use("/api/v1",bookRoute);


app.listen(1000,()=>{
    console.log("SERVER STARTED SUCCESSFULLY");
});