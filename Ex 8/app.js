const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/Restapi',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( ()=> {
    console.log("Mongodb Connected")
})

const ProductRoute = require('./Routes/product.route')
app.use('/products', ProductRoute);

app.use( (req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})

//error handler
app.use( (err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
        status: err.status || 500,
        message: err.message
        }
    })
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})


