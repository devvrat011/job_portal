import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
    },
    website:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    logo:{
        type: String,
    },
    userId:{
        type: String,
        ref: 'User',
        required: true
    }
},{timestamps:true});

export const Company = mongoose.model("Company",companySchema);