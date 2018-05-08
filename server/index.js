const express=require('express');
const bodyParser=require('body-parser')

var Port=process.env.PORT||3000;

const app=express();


app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:false}));

app.listen(Port,()=>console.log(`server started at 3000`));


app.get('/',(req,res)=>{
	//res.send({data:"data"})
	console.log(console.log("request is recieved"))
})

