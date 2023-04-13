import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import router from "./routes/route.js";
// import DefaultImages from "./default.js";

const app = express();
app.use(cors());

// app.use(bodyParser.json({extended:true}));
// app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.urlencoded({limit: '5mb', extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: '5mb',extended:true}));

// app.use(bodyParser.urlencoded({
//   limit: "5mb",
//   extended: true
// }));
// app.use(bodyParser.json({limit: "5mb"}));

app.use("/",router);
Connection();

app.listen(7000,function(){
  console.log("Server started on port 7000");
})

// DefaultImages();