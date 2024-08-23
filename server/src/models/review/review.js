import mongoose, { SchemaType } from "mongoose"

const reviewSchema = new mongoose.Schema({

    product:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:[true,"Product Id is required field !!"]
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:[true,"User Id is required field !!"]
    },
    rating:{
        type:Number,
        min:{
            value:0,
            message:"Minimum rating can only be equal to 0 !!"
        },
        max:{
            value:5,
            message:"Minimum rating can only be less than or equal to 5 !!"
        },
        required:[true,"rating is required field"]
    },
    comment:{
        type:String,
        minlength:{
         value: 5,
         message:"At Least Characters for comment is 5 !!"
        },
        maxlength:{
            value:40,
            message:"At Most 40 Characters can be entered for comment"
        }
    },
},{
    timestamps:true
});



export const Review = mongoose.model('Reviews',reviewSchema);