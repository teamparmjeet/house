import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            enum: ['Luxury', 'Affordable', 'Investment', 'Family', 'Starter'],
            required: true,
        },

        description: { type: String},
        location: { type: String, required: true },
        price: { type: Number, },

        type: {
            type: String,
            enum: ['Apartment', 'House', 'Villa', 'Commercial', 'Land', 'Office'],
            required: true,
        },


        fetureimage: [{ type: String, }],
        images: [{ type: String, }],
        bedrooms: { type: Number, default: 0 },
        bathrooms: { type: Number, default: 0, },
        size: { type: Number, default: 0, },
        landSize: { type: Number, default: 0, },
        yearBuilt: { type: Number, },
        floor: { type: Number, default: 0, },
        amenities: [{ type: String }],
        features: [{ type: String }],

        category: {
            type: String,
            enum: ['Luxury', 'Affordable', 'Investment', 'Family', 'Starter'],
        },

        listingType: {
            type: String,
            enum: ['New Listing', 'Featured', 'Focus', 'Top Project', 'Reduced Price', 'Open House'],
        },


        address: {
            street: { type: String },
            city: { type: String },
            state: { type: String },
            zipCode: { type: String },
            country: { type: String },
        },

        dateListed: { type: Date, default: Date.now },

        status: {
            type: String,
            enum: ['Available', 'Sold', 'Pending', 'Under Offer'],
            default: 'Available'
        },

        energyRating: { type: String, },
        nearbyFacilities: [{ type: String, }],
        parkingSpaces: { type: Number, default: 0, },

    },
    { timestamps: true }
);

const ProjectModel =
    mongoose.models.Project2 || mongoose.model("Project2", ProjectSchema);

export default ProjectModel