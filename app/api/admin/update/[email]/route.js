import AdminModel from "@/model/AdminModel";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export async function PATCH(req) {
    await dbConnect();

    try {
        const { name, email, mobile, password, userid } = await req.json();
        const user = await AdminModel.findOne({ userid });

        if (!user) {
            return new Response(
                JSON.stringify({
                    message: "User not found with the provided userid!",
                    success: false,
                }),
                { status: 404 }
            );
        }

        const updates = { name, email, mobile };

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updates.password = hashedPassword;
        }

        await AdminModel.updateOne({ userid }, { $set: updates });

        return new Response(
            JSON.stringify({
                message: "User updated successfully",
                success: true,
            }),
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({
                message: "Error updating user",
                success: false,
            }),
            { status: 500 }
        );
    }
}
