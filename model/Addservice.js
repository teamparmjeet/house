import mongoose, { Schema } from "mongoose";

const AddServiceSchema = new Schema(
    {

        title: { type: String },
        description:{type:String},
        defaultdata: { type: String, required: true, default: "addservice" }

    },
    { timestamps: true }
);

const AddServiceModel =
    mongoose.models.AddService1 || mongoose.model("AddService1", AddServiceSchema);

export default AddServiceModel