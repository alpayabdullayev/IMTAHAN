import mongoose, { Schema } from "mongoose";


const ProductSchema =  new Schema (
    {
        name : {type : String},
        image : {type : String},
        description : {type : String},
        category : {type : String},
        price : {type : Number},
    }
)


export default mongoose.model("exam",ProductSchema)
