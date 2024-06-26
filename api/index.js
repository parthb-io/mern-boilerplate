import express from 'express'
import mongoose from'mongoose';
import userRoutes  from './routes/user.route.js';
// import & initialize dotenv
import dotenv from 'dotenv'
dotenv.config();


mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log('Connected to mongo');
}).catch((err)=>{
    console.log(err);
});
   



const app = express();

app.listen(3000,()=>{
    console.log('Server listening on port 3000!')
})


// add 1st api route
app.use('/api/user', userRoutes);