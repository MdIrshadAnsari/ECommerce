const mongooose = require('mongoose')

const connection = async()=>{
    try {
        await mongooose.connect(`${process.env.URI}`)
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
}
connection()