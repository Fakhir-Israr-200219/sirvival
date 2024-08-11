const mongoose = require("mongoose")

const db = async ()=>{
    try {
       const connect = await mongoose.connect(process.env.CONNECTION_STRING)
       console.log(`data base successfully connected in host ${connect.connection.host} & name ${connect.connection.name}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = db