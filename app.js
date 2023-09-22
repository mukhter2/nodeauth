const express = require('express');
const app = express();
const path = require('path')

app.set('view engine','ejs');
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


app.get('/',(req,res)=>{
    res.send("hello world 2");
})

app.get('/login',(req,res)=>{
    res.render("login");
})
app.get('/register',(req,res)=>{
    res.render("register");
})
app.post('/login',(req,res)=>{
    res.send("Login post");
})
app.post('/register',(req,res)=>{
    res.send("register post  ");
})

app.get('/logout',(req,res)=>{
    res.send("logout get");
})

app.get('/protected',(req,res)=>{
    res.send("protected get");
})
app.listen(5000,(req,res)=>{
    console.log("Listening to port 5000");
})