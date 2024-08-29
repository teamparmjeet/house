import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema(
    {
       
        name: { type: String },
        email: { type: String },
        mobilenumber: { type: String },
        message: { type: String },
        defaultdata:{type:String,required:true,default:"contact"}
        
    },
    { timestamps: true }
);

const ContactModel =
    mongoose.models.contactus2 || mongoose.model("contactus2", ContactSchema);

export default ContactModel