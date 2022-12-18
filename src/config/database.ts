import mongoose from "mongoose";

export async function dbConnect() {
    mongoose.set('strictQuery', false)
    try {
        const mongoUri = 'mongodb://localhost:27017/comerce'
        mongoose.connect(mongoUri, {
            autoIndex: true
        }, async () => {
            console.log('Connected to mongo datebase')
        })
    } catch (e) {
        console.log('Error in mongo connection')
    }
}
