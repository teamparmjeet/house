import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
    {
        name: { type: String },
        mobile: { type: Number },
        city: { type: String },
        servicetype: { type: String },
        address: { type: String },
        description: { type: String },
        status: { type: String, required:true, enum: ["Completed", "In Progress", "Scheduled", "Pending", "Cancelled"],default:"Pending" },
        defaultdata: { type: String, required: true, default: "service" }
    },
    { timestamps: true }
);

const ServiceModel =
    mongoose.models.service3 || mongoose.model("service3", ServiceSchema);

export default ServiceModel