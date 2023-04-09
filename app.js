/// [imports]
var express = require('express');
var usersRouter = require('./routes/user_router');
const dotenv = require('dotenv');
var mongoose = require('mongoose');
var cors = require('cors');
var proxyRouter = require('./routes/cors_proxy');

/// [variables]
var app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.get("/",(req,res)=>{
    res.send('Hi, I am live !');
});
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors({
    origin: 'http://127.0.0.1:3000',
}));
app.use(usersRouter);
app.use(proxyRouter);

mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(() => {
    console.log(`Connection successful`);
    /// [app listening to the port]
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}).catch((err) => {
    console.log('Connection failed');
});