const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const categories = require('./data/categories.json')

app.get('/', (req, res)=>{
    res.send('dragon is running');
})

app.use(cors())

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.listen(port, ()=>{
    console.log(`Dragon API is running on port ${port}`);
}) 