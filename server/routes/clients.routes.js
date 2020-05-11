const express = require('express');
const router = express.Router();

const { protect }= require('../middleware/auth.protect');

const {getClient,
       getClients,
       deleteClients,
       updateClients,
       createClients} = require('../controllers/clients.controller');

router
   .route('/')
   .get(getClients)
   .post(protect,createClients);

router
   .route('/:id')
   .delete(protect,deleteClients)
   .put(protect,updateClients)
   .get(protect,getClient)


module.exports = router;