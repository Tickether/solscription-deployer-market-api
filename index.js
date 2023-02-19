import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import contractsRoute from './routes/contracts.js'
import ownersRoute from './routes/owners.js'
import withdrawalsRoute from './routes/withdrawals.js'


const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mongoDB!')
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected', ()=> {
    console.log('mongoDB disconnected!')
})

//middlewares
app.use(cors()); 
app.use(express.json());

app.use('/api/contracts', contractsRoute);
app.use('/api/owners', ownersRoute);
app.use('/api/withdrawals', withdrawalsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


const port = process.env.port || 8000;
app.listen(port, ()=>{
    connect();
    console.log('Connected to backend!');
});