import mongoose from 'mongoose'


const collectionSchema = mongoose.Schema({

    description: {
        type: String
    },
    collectionName: {
        type: String,
        unique,
        required: [true, "Please Enter String"]
    },





}, {
    timestamps: true,
});


