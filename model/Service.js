import mongoose, { Schema } from "mongoose";
import moment from "moment"; // You'll need to install moment.js

const ServiceSchema = new Schema(
    {
        name: { type: String },
        mobile: { type: Number },
        city: { type: String },
        servicetype: { type: String },
        address: { type: String },
        description: { type: String },
        date: { type: String }, // Change type to String to store formatted date
        time: { type: String }, // Keep time as a String
        status: { 
            type: String, 
            required: true, 
            enum: ["Completed", "In Progress", "Scheduled", "Pending", "Cancelled"],
            default: "Pending" 
        },
        defaultdata: { type: String, required: true, default: "service" }
    },
    { timestamps: true }
);

// Pre-save middleware to format date and time
ServiceSchema.pre("save", function(next) {
    // Format date to dd-mm-yyyy
    this.date = moment(this.date).format("DD-MM-YYYY");

    // Format time to hh:mm
    this.time = moment(this.time, "HH:mm").format("HH:mm");

    next();
});

const ServiceModel =
    mongoose.models.service4 || mongoose.model("service4", ServiceSchema);

export default ServiceModel;
