let express = require('express')
let mongoose = require('mongoose')
let port = 8000
let app = express()
let Users = require('./Model/users')
let cors = require('cors')
const users = require('./Model/users')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))


let db_url = 'mongodb://localhost:27017/Mern2';
mongoose.connect(db_url)
    .then(() => {
        console.log("Connection Established");
    })

app.get('/', (req, res) => {
    res.send("Home page")
})

app.post("/login", (req, res) => {
    Users.findOne({ email: req.body.email })
        .then((data) => {
            if (data) {
                if (data.password === req.body.password) {
                    res.send({ message: "Login Successful", status: 200 })
                } else {
                    res.send({ message: "Password does not match" })
                }
            } else {
                res.send({ message: "User not found" })
            }
        })
})
//fetch the data
app.get('/register', async (req, res) => {
    await Users.find({}).sort({name:1})
        .then((data) => {
            res.send(data)
        })
})
app.get('/register/:_id', async (req, res) => {
    let id=req.params._id
    await Users.find({_id:id})
        .then((data) => {
            res.send(data)
        })
        .catch(()=>{
            res.send("Data Not there")
        })
})

app.delete('/register/:_id',async(req,res)=>{
    let id=req.params._id
    console.log(id);
    await Users.findOne({_id:id})
      .then((data)=>{
    Users.deleteOne({_id:ObjectId(`${data._id}`)})
    res.send(data)
    console.log("Deleted");
      })
   .catch(()=>{
    res.send('NOt There')
   })
})


app.post('/register', async (req, res) => {
    Users.findOne({ email: req.body.email })
        .then((data) => {
            if (data) {
                res.send({ message: "Email is allreasy exist" })
            } else {
                let userData = new Users({
                    name: req.body.name,
                    email: req.body.email,
                    phoneNo: req.body.phoneNo,
                    gender: req.body.gender,
                    course: req.body.course,
                    Designation: req.body.Designation,
                    image: req.body.image,
                    password: req.body.password,
                    data:new Date()
                })
                userData.save()
                    .then(() => {
                        res.send({ message: "Register successfully" })
                    })
                    .catch(() => {
                        res.send({ message: "Something went wrong" })
                    })
            }
        })
})


app.listen(port, () => {
    console.log(`server on ${port}`);
})