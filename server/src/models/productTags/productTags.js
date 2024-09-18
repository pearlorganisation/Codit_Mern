import mongoose from "mongoose";


const tagSchema = new mongoose.Schema({

    tagName:{
        type:String,
        minlength:{
            value : 4,
            message:"Minimum character length for tag is 4"
        },
        maxlength:{
            value:20,
            message:"Maximum character length for tag is 20"

        }
    },




},{
    timestamps:true
});

export const Tag = mongoose.model('Tag',tagSchema);