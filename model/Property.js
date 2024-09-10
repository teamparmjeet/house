import mongoose, { Schema } from "mongoose";
import moment from "moment"; // Import moment for date formatting

const toUpperCase = (str) => str.toUpperCase();

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            unique: true,
        },
        location: {
            type: String,
            required: true
        },
        price: { type: Number },
        metatitle: { type: String },
        metadescription: { type: String },
        propertyname: {
            type: String,
        },


        type: {
            type: String,
            enum: ['Apartment', 'House', 'Villa', 'Commercial', 'Land', 'Office'],
            required: true,
        },
        dateListed: { type: Date, default: Date.now },



        featureImage: [{ type: String }],
        images: [{ type: String }],

        address: {
            houseNumber: { type: String },
            colony: { type: String },
            area: { type: String },
            landmark: { type: String },
            city: { type: String },
            pincode: { type: String },
            state: { type: String, required: true, default: 'Rajasthan' },
            country: { type: String, required: true, default: 'India' },
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
        listingType: {
            type: String,
            enum: ['New Listing', 'Featured', 'Focus', 'Top Project', 'Reduced Price', 'Open House'],
        },
        amenities: [{ type: String }],
        features: [{ type: String }],
        nearbyFacilities: [{ type: String }],
        securityFeatures: [{ type: String }],
        energyRating: { type: String },
        description: { type: String },
        propertyType: { type: String },
        yearRenovated: { type: Number },
        heatingType: { type: String },
        coolingType: { type: String },
        parkingSpaces: { type: Number, default: 0 },
        flooringType: { type: String },
        viewType: { type: String },
        status: {
            type: String,
            enum: ['Available', 'Sold', 'Pending', 'Under Offer'],
            default: 'Available',
        },
        hasGarage: { type: Boolean, default: false },
        hasPool: { type: Boolean, default: false },
        hasGarden: { type: Boolean, default: false },
        petFriendly: { type: Boolean, default: false },
        defaultdata: { type: String, required: true, default: "project" }
    },
    { timestamps: true }
);

// Pre-save hook to capitalize location and address.city, and generate slug
ProjectSchema.pre('save', async function (next) {
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
        let slugBase = `${this.title.replace(/\s+/g, '-')}`;

        // Include propertyname in the slug if it exists
        if (this.propertyname) {
            slugBase += `-${this.propertyname.replace(/\s+/g, '-')}`;
        }

        this.slug = `${slugBase}-${formattedDate}`.toLowerCase();

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
    mongoose.models.Project21 || mongoose.model("Project21", ProjectSchema);

export default ProjectModel;
