const express = require('express');
const router = express.Router();

//Logic CORE of the rest api. 
const handlers = require('../Handlers/TestToTheAPIHandlers');

//REST SIMPLE API.
router.get('/:ID', handlers.GetRequest);
router.post('/', handlers.PostRequest);
router.put('/', handlers.EditRequest);
router.delete('/', handlers.DeleteRequest);

module.exports = router;