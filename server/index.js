const express=require('express');
const cors=require('cors');
const connectDB=require('./db');
const Todo = require('./model/model');
const todo = require('./model/model');

const app=express();
app.use(cors());
app.use(express.json());

app.post('/add',async(req,res)=>{
    try {
        const Todos = await todo.create(req.body);
        res.json(Todos)
    } catch (error) {
        res.json({message:error.message});
    }
});
app.get('/get',async(req,res)=>{
    try {
        const Todos = await todo.find();
        res.json(Todos)
    } catch (error) {
        res.json({message:error.message});
    }
}   
);
app.put('/update/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const Todos = await todo.findByIdAndUpdate(id,req.body);
        res.json(Todos)
    } catch (error) {
        res.json({message:error.message});
    }
});

app.delete('/delete/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const Todos = await todo.findByIdAndDelete(id);
        res.json(Todos)
    } catch (error) {
        res.json({message:error.message});
    }
});

app.listen(5000,async()=>{
    await connectDB();
    console.log('Server has started on port 5000');
});
