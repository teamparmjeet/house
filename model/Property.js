import mongoose, { Schema } from "mongoose";
import moment from "moment"; // Import moment for date formatting

const toUpperCase = (str) => str.toUpperCase();

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            enum: ['Luxury', 'Affordable', 'Investment', 'Family', 'Starter'],
            required: true,
        },
        slug: { 
            type: String,
            unique: true, // Ensure that slug is unique
        },
        location: { 
            type: String, 
            required: true 
        },
        price: { type: Number },
        metadata: { type: String },
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

        description: { type: String },
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

// Pre-save hook to capitalize location and address.city, and generate slug
ProjectSchema.pre('save', async function(next) {
    // Capitalize location
    if (this.location) {
        this.location = toUpperCase(this.location);
    }

    // Capitalize address.city
    if (this.address && this.address.city) {
        this.address.city = toUpperCase(this.address.city);
    }

    // Generate slug
    if (!this.slug) {
        const formattedDate = moment().format('DDMMYY-HHmmss');
        this.slug = `${this.title.replace(/\s+/g, '-')}-${formattedDate}`.toLowerCase();

        // Ensure the unique constraint is checked
        try {
            const existingSlugCount = await this.constructor.countDocuments({ slug: this.slug }).exec();
            if (existingSlugCount > 0) {
                // Handle duplicate key error if necessary
                return next(new Error('Duplicate slug detected.'));
            }
        } catch (error) {
            return next(error);
        }
    }
    next();
});

const ProjectModel =
    mongoose.models.Project16 || mongoose.model("Project16", ProjectSchema);

export default ProjectModel;
