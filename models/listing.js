//listing.js
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review = require("./review.js");
const { ref } = require("joi");

const listingSchema=new Schema({
    title: {
        type: String,
        required: true,
    
    },
    description: String,
    image: {
        // type: String,
        // default:"https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
        // set: (v) => 
        //     v === "" 
        // ? "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" 
        // : v,
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
        type: Schema.Types.ObjectId,
        ref: "Review",
    },
],
owner: {
    type: Schema.Types.ObjectId,
    ref:"User",
},

geometry : {
    type: {
        type : String, //don't do `{location: {type:String}}`
        enum: ["Point"],//location type must be point
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
},


});
//mongoose middleware
listingSchema.post("findOneAndDelete",async(listing) =>{
    if(listing){
    await Review.deleteMany({_id : { $in: listing.reviews}});
    }
});

const Listing= mongoose.model("Listing",listingSchema);
module.exports=Listing;







  