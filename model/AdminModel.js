import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema(
    {
        name: { type: String, required: true },
        mobile: { type: Number, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

const AdminModel =
    mongoose.models.admin || mongoose.model("admin", AdminSchema);

export default AdminModel