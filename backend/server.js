const express =require("express")
const app = express()
const empRoutes=require("./routes/employee")
const mongoose =require("mongoose")

const cors =require("cors")
app.use(cors(
    // origin: "http://localhost:3333",
    // credentials: true,
    // optionsSuccessStatus:200,
    // headers:{"Access-Control-Allow-Origin":"*"}
));

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//     });




mongoose.connect("mongodb+srv://admin:2231874q@cluster0.k9xgmtm.mongodb.net/comp3123_assignment2?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(express.json())
//app.use(express.urlencoded())

const SERVER_PORT =process.env.PORT || 3333

app.use("/api/",empRoutes)
app.route("/hello")
    .get((req,res)=>{
        res.send("WEL - User")

    })

app.listen(SERVER_PORT,()=>{
    console.log("http://localhost:3333/")
})