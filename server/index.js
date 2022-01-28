const express = require('express');
const fileUpload = require('express-fileupload');
const crypto = require('crypto');
var cors = require('cors')
var path = require('path')
const mangaNameRoutes = require('./router/mangaNameRoutes')
const chapterRoutes = require('./router/chapterRoutes')
const pageRoutes = require('./router/pageRoutes')




const PORT = process.env.PORT ||5000
const app = express()   
app.use(fileUpload({}));
app.use(express.json())
app.use(cors())


app.use('/manga',mangaNameRoutes)
app.use('/manga',chapterRoutes)
app.use('/manga',pageRoutes)


app.use('/', express.static(__dirname + '/public'));



app.listen(PORT,()=>console.log('server PORT ==>'+PORT+"..."))