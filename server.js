const express = require('express');
const app = express();
const cors  = require('cors');
const db = require('./model/index')


var corOptions = {
    origin: 'https://127.0.0.1:8081'
}




//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routers/

const router = require('./routes/productRoute.js');

app.use('/api/products',router)


const reviewRouter = require('./routes/reviewRoute.js');
app.use('/api/review',reviewRouter)


const loginRoutes = require('./routes/loginRoute.js');
app.use('/api/login',loginRoutes)

// const route = require('./routes/reviewRoute.js');
// app.use('/api/rating',route)


//testing api//

app.get('/',(req,res)=>{
    res.json({message:'hello from api'});
})

///server//

app.listen(8081,()=>{
    console.log('server is running');
})