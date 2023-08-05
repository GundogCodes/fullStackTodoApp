const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('connected', ()=>{
    console.log(`Minguiose is nice on ${db.name} at ${db.host} yo haha`)
})