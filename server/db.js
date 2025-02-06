const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        mongoose.connect('mongodb+srv://naykyawthet777:nkt777@cluster0.i1ixa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => console.log('Connected!'));
    }catch{
        console.error("Connection to database failed");
    }
}

module.exports=connectDB;