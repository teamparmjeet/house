import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema(
    {
        name: { type: String, required: true },
        mobile: { type: Number, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        usertype: { type: String, enum: ["1", "2"], default: "1", required: true },
    },
    { timestamps: true }
);

const AdminModel =
    mongoose.models.admin1 || mongoose.model("admin1", AdminSchema);

export default AdminModel