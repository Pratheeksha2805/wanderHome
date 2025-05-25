//initialization full logic
//index.js file
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing = require("../models/listing.js");

//to connect mongodb
main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB=async()=>{
    await Listing.deleteMany({});
     initData.data =initData.data.map((obj) => ({ ...obj , 
        owner:"652d0081ae547c5d37e56b5f",
    }));
    //changed code ...from chatgpt
    //await Listing.insertMany(initData.data);
    const listingsToInsert = initData.data.map(listing => ({
        ...listing,
        image: listing.image.url
    }));
    
    await Listing.insertMany(listingsToInsert);
    console.log("data was initialized");
};

initDB();

//go to cd init then node index.js ..then database will be reinitialized
//i did it already