
const express = require('express')
const app = express();
const port = 8080;
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const verifyJWT = (req,res,next)=>{
    const token = req.headers['x-access-token'];
    if (!token) {
        res.json({message: 'you need token to get data!'})
    }
    else{
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if (err) {
                res.json({auth: false,message: 'authentication failed'});
            }
            else{
                req.userId = decoded.id;
                next();
            }
        })
    }
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})