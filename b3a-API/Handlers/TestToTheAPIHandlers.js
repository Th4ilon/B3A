// REST CODE INFO...

// 1XX - informational
// 2XX - success
// 3XX - redirection
// 4XX - client error
// 5XX - server error

//
const getRequest = (req, res, next)=>{
    const id = req.params.ID;
    if (id ==='niger') {
        res.status(200).json({
            message: 'Pablo es bien marico OYO!'
        })    
    } else {
        res.status(200).json({
            message: 'it works!!',
            id : id
        })    
    }
    
};

//
const postRequest = (req, res, next)=>{
    const obj = {
        type: req.body.type,
        Id : req.body.Id
    };
    res.status(201).json({
        message: 'it works!',
        obj: {
            response: 'Good',
            Object: obj
        }
    })
};

//
const editRequest = (req, res, next)=>{
    res.status(202).json({
        message: 'it works!'
    })
};

//
const deleteRequest = (req, res, next)=>{
    res.status(203).json({
        message: 'it works!'
    })
};

module.exports = Object.freeze({
    GetRequest: getRequest,
    PostRequest: postRequest,
    EditRequest: editRequest,
    DeleteRequest: deleteRequest
});