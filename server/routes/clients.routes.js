const express = require('express');
const router = express.Router();

const {getClient,
       getClients,
       deleteClients,
       updateClients,
       createClients} = require('../controllers/clients.controller');

router
   .route('/')
   .get(getClients)
   .post(createClients);

router
   .route('/:id')
   .delete(deleteClients)
   .put(updateClients)
   .get(getClient)


module.exports = router;