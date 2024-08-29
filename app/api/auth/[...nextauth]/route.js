import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/model/AdminModel";
import bcrypt from "bcryptjs";



export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},


            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await dbConnect();
                    const admin = await AdminModel.findOne({ email });

                    if (!admin) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, admin.password);

                    if (!passwordMatch) {
                        return null;
                    }

                    return admin;

                } catch (error) {
                    console.log("Error:", error)
                }
                return admin;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/page/auth/login", 
    },

    
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };