const express = require('express');
const router = express.Router();

//Logic CORE of the rest api. middleware
const handlers = require('../Handlers/TestRESTHandlers');

//REST SIMPLE API.
router.get('/', handlers.GetRequest);
router.post('/', handlers.PostRequest);
router.put('/', handlers.EditRequest);
router.delete('/', handlers.DeleteRequest);

module.exports = router;