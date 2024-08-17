import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            enum: ['Luxury', 'Affordable', 'Investment', 'Family', 'Starter'],
            required: true,
        },
        location: { type: String, required: true },
        price: { type: Number },
        type: {
            type: String,
            enum: ['Apartment', 'House', 'Villa', 'Commercial', 'Land', 'Office'],
            required: true,
        },

        featureImage: [{ type: String }],
        images: [{ type: String }],
        bedrooms: { type: Number, default: 0 },
        bathrooms: { type: Number, default: 0 },
        size: { type: Number, default: 0 },
        landSize: { type: Number, default: 0 },
        yearBuilt: { type: Number },
        floor: { type: Number, default: 0 },
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
            default: 'Available',
        },

        energyRating: { type: String },
        nearbyFacilities: [{ type: String }],
        parkingSpaces: { type: Number, default: 0 },

        description: { type: String },// End
        // Additional details
        propertyType: { type: String },
        yearRenovated: { type: Number },
        hasGarage: { type: Boolean, default: false },
        hasPool: { type: Boolean, default: false },
        hasGarden: { type: Boolean, default: false },
        heatingType: { type: String },
        coolingType: { type: String },
        securityFeatures: [{ type: String }],
        flooringType: { type: String },
        viewType: { type: String },
        petFriendly: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const ProjectModel =
    mongoose.models.Project3 || mongoose.model("Project3", ProjectSchema);

export default ProjectModel;
