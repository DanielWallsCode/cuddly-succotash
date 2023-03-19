import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/votacion')
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))