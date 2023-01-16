import mongoose from "mongoose";

export async function dbConnect() {
    mongoose.set('strictQuery', false)
    try {
        const mongoUri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_NAME}.mongodb.net/?retryWrites=true&w=majority`;
        mongoose.connect(mongoUri, {
            autoIndex: true
        }, async () => {
            console.log(`Connected to mongo datebase, ${mongoUri}`)
        })
    } catch (e) {
        console.log('Error in mongo connection')
    }
}
