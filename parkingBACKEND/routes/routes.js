const router = require("express").Router();

const { findById } = require("../models/route");
let Route = require("../models/route");





// Creating Route route - adding a new route
router.route("/add").post((req,res)=>{

    const {route_Id, from, to, dep_time, bus_Id, driver_Id, conductor_Id} = req.body;


    const newRoute = new Route({route_Id, from, to, dep_time, bus_Id, driver_Id, conductor_Id});

    newRoute.save().then(()=>{
        res.json("Route Added")
    }).catch((err)=>{
        res.json(send({status: "Error with updating data", error: err.message}))
    });

});





// Displaying all route info
router.route("/get").get((req,res)=>{

    Route.find().then((routelett)=>{
        res.json(routelett);
    }).catch((err)=>{
        console.log(err);
    })

});
// Creating Route route - Getting route info by route ID
router.route("/get/:route_Id").get(async(req,res)=>{
    let route_Id = req.params.route_Id
    const route = await Route.findOne({route_Id : {$eq : route_Id}}).then((routeinfo)=>{
        res.status(200).send({routeinfo})
    }).catch((err)=>{
        console.log(err.message);
    })
})





// Creating Route route - Updating  route details
router.route("/update/:route_Id").put(async(req,res)=>{
    let route_Id = req.params.route_Id;
    const {from, to, dep_time, bus_Id, driver_Id, conductor_Id} = req.body;

    const updatedRoute = {from, to, dep_time, bus_Id, driver_Id, conductor_Id}

    const update = await Route.findOneAndUpdate({route_Id: {$eq: route_Id}}, updatedRoute).then(()=>{
        res.status(200).send({status: "Route Updated"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})






// Creating Route route - Deletion of a route detail
router.route("/delete/:route_Id").delete((req,res,next)=>{
    let route_Id = req.params.route_Id;
    Route.findOneAndRemove({route_Id: {$eq: route_Id}},(error,data)=>{
       if(error){
           return next(error);
       }else{
           res.status(200).json({
               msg: data
           })
       }
    })
})







// Exporting router for model
module.exports = router;