
// under views , under listings, under utils ,this is a ExpressError.js file
class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode=statusCode;
        this.message=message;
    }
}

module.exports=ExpressError;