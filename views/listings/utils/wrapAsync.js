
// under views , under listings, under utils ,this is a wrapAsync.js file
module.exports=(fn)=>{
    return (req,res,next)=> {
        fn(req,res,next).catch(next);
    };
};