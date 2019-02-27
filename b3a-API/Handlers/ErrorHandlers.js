
const NotFoundAPIResponse = (req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
    
};

//
const InsideAppErrorAPIResponse = (error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
};

module.exports = Object.freeze({
    NotFoundAPIResponse: NotFoundAPIResponse,
    InsideAppErrorAPIResponse: InsideAppErrorAPIResponse
});