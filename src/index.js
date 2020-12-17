const express=require('express');
const app=express();
app.get('/',(req,res) => res.send('hello geekhunter!'));

app.listen(process.env.PORT || 3000);