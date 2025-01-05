const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const port = 3000;

app.use(cors({
   origin: 'travels-dusky.vercel.app',  // Allow only your frontend URL
   methods: 'GET,POST',
   credentials: true
}));

const bcrypt = require('bcrypt')

// const url = `mongodb+srv://shevarepushkar:QJTgoN39Z4ynzvJL@cluster0.7g6ee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const url = `mongodb+srv://amanwisdomsprout:amanwisdomsprout@cluster0.iparkic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(url);

client.connect()
.then(() => console.log('Connected...'))
.catch(err => console.error('Connection failed:', err));

const dbName = 'Arohi_Travels';
app.use(bodyParser.json());

app.post('/submitData',(req,res)=>{
    const customerData = req.body;

    console.log(customerData);

    try {
        const db = client.db(dbName);
        const collection = db.collection('Customer');
        const submitCustomer = collection.insertOne(customerData);
        
        return res.status(200).json({message : 'We will Contact you soon...'})
    } catch (error) {
        return res.status(500).json({message : 'Server error : ',error})
    }
    
})

app.post('/inTouchData',(req,res)=>{
    const inTouchData = req.body;


    try {
        const db = client.db(dbName);
        const collection = db.collection('inTouch');
        const submitInTouchData = collection.insertOne(inTouchData);
        
        return res.status(200).json({message : 'We will Contact you soon...'})
    } catch (error) {
        return res.status(500).json({message : 'Server error : ',error})
    }
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
