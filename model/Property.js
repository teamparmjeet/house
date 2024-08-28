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
       
        address: {
            houseNumber: { type: String },
            colony: { type: String },
            area: { type: String },
            landmark: { type: String },
            city: { type: String },
            pincode: { type: String },
            state: { type: String },
            country: { type: String, default: 'India' },
        },

        size: { type: Number, default: 0 },
        floor: { type: Number, default: 0 },
        bedrooms: { type: Number, default: 0 },
        bathrooms: { type: Number, default: 0 },
        landSize: { type: Number, default: 0 },
        yearBuilt: { type: Number },
        purpose: {
            type: String,
            enum: ['Buy', 'Rent'],
        },
        status: {
            type: String,
            enum: ['Available', 'Sold', 'Pending', 'Under Offer'],
            default: 'Available',
        },


        amenities: [{ type: String }],
        features: [{ type: String }],
        listingType: {
            type: String,
            enum: ['New Listing', 'Featured', 'Focus', 'Top Project', 'Reduced Price', 'Open House'],
        },
        dateListed: { type: Date, default: Date.now },
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
        defaultdata: { type: String, required: true, default: "project" }
    },
    { timestamps: true }
);

const ProjectModel =
    mongoose.models.Project7 || mongoose.model("Project7", ProjectSchema);

export default ProjectModel;
