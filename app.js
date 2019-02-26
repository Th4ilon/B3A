const express = require('express');
const app = express();
const testApi = require('./b3a-API/routes/TestREST');
//Midleware.
//Incoming request have top go for this function(hendler)
// var funtTopass = (req, res, next)=>{
//     res.status(200).json({
//         message: 'it works!'
//     })
// }
// app.use(funtTopass);
//---------
app.use('/TestRest',testApi);
module.exports = app;
