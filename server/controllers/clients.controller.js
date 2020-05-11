const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async')
const Client = require('../models/Clients'); 

//@desc     Get all clients
//@route    GET /api/v1/clients 
//@access   Public
exports.getClients = asyncHandler(async (req ,res , next) => {
       let query;

       //Copy req.query
       const reqQuery = {...req.query};

       //Fields to exclude
       const removeFields = ['select','sort','page','limit'];

       //loop over removeField and delete them from reqQuery
       removeFields.forEach(param => delete reqQuery[param]);

       //create query string
       let queryStr =JSON.stringify(reqQuery);

       //create operates($gt, $gte, etc)
       queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
       
       //finding resource
       query = Client.find(JSON.parse(queryStr));

       // select Fields
       if (req.query.select) {
           const fields = req.query.select.split(',').join(' ');
           query = query.select(fields);
        
       }

        // Sort
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        }else{
            query = query.sort('-createdAt')
        }

        // Pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit,10) || 25;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await Client.countDocuments();

        query = query.skip(startIndex).limit(limit);
       
       //Execute query
       const clients = await query;

       //pagination result
       const pagination = {};

       if(endIndex < total){
          pagination.next = {
              page:page + 1,
              limit
          }
       }

       if(startIndex < 0){
        pagination.prev = {
            page:page - 1,
            limit
        }
     }
       res.setHeader("Content-Type", "application/json");
       res.status(200).json({
           success: true,
           count: clients.length,
           pagination,
           data: clients
       }) ;
});


//@desc     Get a clients
//@route    GET /api/v1/clients/:id
//@access   Private
exports.getClient = asyncHandler(async (req ,res , next) => {
   
        const client = await Client.findById(req.params.id);
        res.setHeader("Content-Type", "application/json");
        if(!client){
            return next(new ErrorResponse(`Client not found with id ${req.params.id}`,404))
        }
        
        res.status(200).json({
            success: true,
            data: client
        }); 
});

//@desc     Create a client
//@route    POST /api/v1/clients/
//@access   Private
exports.createClients = asyncHandler(async (req ,res , next) => {
        const client = await Client.create(req.body);
       res.status(201).json({
        success: true,
        data: client
    })
});


//@desc     Update a client
//@route    PUT /api/v1/clients/:id
//@access   Private
exports.updateClients = asyncHandler(async (req ,res , next) => {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
    
        if(!client){
            return next(new ErrorResponse(`Client not found with id ${req.params.id}`,404))
        }

        res.status(200).json({
            success:true,
            data: client
        })
});

//@desc     Delete a client
//@route    DELETE /api/v1/clients/:id
//@access   Private
exports.deleteClients = asyncHandler(async (req ,res , next) => {
        const client = await Client.findByIdAndDelete(req.params.id);
    
        if(!client){
            return next(new ErrorResponse(`Client not found with id ${req.params.id}`,404))
        }
        res.status(200).json({
            success:true,
            data: `client deleted`
        })
});