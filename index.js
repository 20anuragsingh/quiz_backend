import mongoose from "mongoose";
import cores from 'cores'
import  Express  from "express";

const app=Express()
app.use(Express.json())
app.use(cores)
app.use(Express.urlencoded())

mongoose.connect('mongodb+srv://anurag:me_anurag@first.iqcpp.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('its working fine')
    console.log('database connected')
})

const user_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll_no:{
        type:Number,
        required:true
    },
    phone_no:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:false
    }
})

const user =new mongoose.model('first',user_schema)


app.get('/' ,(req,res) => {
    console.log(req)
    res.send('thinks for requesting')
    console.log('you are in app.get currentaly')
})
app.post('/register',(req,res)=>{
    console.log('resistor working good')
    console.log(req.body)
    res.send('okay thinks!')
})

app.listen(3005,()=>{
    console.log('server started')
})