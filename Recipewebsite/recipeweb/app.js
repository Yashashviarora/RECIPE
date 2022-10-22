const express =require("express");
const app=express();
const router=express.Router();
const path=require("path")
const hbs=require("hbs")
// const ejs=require("ejs")
// const paytm = require('paytm-nodejs');
const port=process.env.port||5000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
const Register=require("./models/conn");
const customer = require('./models/customer');
const signup = require('./models/signup');

// const { Timestamp, Int32 } = require("mongodb");

app.set('views', path.join(__dirname, '/views'))

app.set("view engine","hbs");
app.get('/',(req,res)=>{
     res.render("signup");
})
app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/tour&travels',(req,res)=>{
    res.render("tour&travels");
})
app.get('/carvisit',(req,res)=>{
    res.render("customer");
})


app.post('/signup',async(req,res)=>
{

    

    try
    {
      
       const password=req.body.password;
       const  Cpassword=req.body.Cpassword;
       if(password == Cpassword)
       {
            
            const REg = new signup
        ({
           
            Name:req.body.username,
            email:req.body.email,
            password:password,
            Confirmpassword:Cpassword
        })
        await REg.save()
        .then(item => 
        {  console.log("byee");
        res.status(200).render("home");
        })
        .catch(err=> 
        { console.log(err);
        res.status(400).send("unable to save to database");
        });
    }  else{
        res.send("passwprd are not matching")
    }
}
        catch(err){
            console.log("ERRORRRRRRRRRRRRRRRRRRRRRRR");
            res.status(400).send(err);
        }
      
      
    
})
    



app.post('/paynow',async(req,res)=>
{
    try
    {   console.log(req.body.NAME);

          const CAR = new customer
        ({
            
            Name:req.body.NAME,
            phonenumber:req.body.NUMBER,
            email:req.body.EMAIL,
            date:req.body.DATE,
            time:req.body.TIME,
            car:req.body.CAR,
            dis:req.body.RANGE
        })
        await CAR.save()
        .then(item => 
        {  console.log("byee");
        res.status(200).send("data saved");
        })
        .catch(err => 
        { 
        console.log(err);
        res.status(400).send("unable to save to database");
        });
    
}
        catch(err){
            console.log("ERRORRRRRRRRRRRRRRRRRRRRRRR");
            res.status(400).send(err);
        }
      
      
    
})

app.listen(port,()=>{

    console.log(`server ${port}` );
})