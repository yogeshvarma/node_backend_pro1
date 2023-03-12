/// [imports]
var express = require('express');
var usersRouter = require('./routes/user_router');
const dotenv = require('dotenv');
var mongoose = require('mongoose');

/// [variables]
var app = express();
const port = 3000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(usersRouter);

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