import mongoose from "mongoose";


// Main Category Schema
const categorySchema = new mongoose.Schema({
    homeBannerImg: String,
    homeHeading: String,
    homeDescription: String,
    heading: String,
    subHeading: String,
    description: String,
    subCategory: [], // Array of subcategories
    bannerImg: String,
});

const Category = mongoose.model("serviceCat", categorySchema);

export default Category;
