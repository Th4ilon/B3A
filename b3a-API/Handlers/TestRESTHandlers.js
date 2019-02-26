// REST CODE INFO...

// 1XX - informational
// 2XX - success
// 3XX - redirection
// 4XX - client error
// 5XX - server error

//
const getRequest = (req, res, next)=>{
    res.status(200).json({
        message: 'it works!'
    })
};

//
const postRequest = (req, res, next)=>{
    res.status(200).json({
        message: 'it works!'
    })
};

//
const editRequest = (req, res, next)=>{
    res.status(200).json({
        message: 'it works!'
    })
};

//
const deleteRequest = (req, res, next)=>{
    res.status(200).json({
        message: 'it works!'
    })
};

module.exports = Object.freeze({
    GetRequest: getRequest,
    PostRequest: postRequest,
    EditRequest: editRequest,
    DeleteRequest: deleteRequest
});