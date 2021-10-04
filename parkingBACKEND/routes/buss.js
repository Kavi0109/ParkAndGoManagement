const router = require("express").Router();

const { findById } = require("../models/bus");
let Bus = require("../models/bus");





// Creating Bus route - adding a new bus
router.route("/add").post((req,res)=>{

    const {bus_Id, name, no_Plate, owner_Name, date_Rented, rental_Rem, phone_No} = req.body;


    const newBus = new Bus({bus_Id, name, no_Plate, owner_Name, date_Rented, rental_Rem, phone_No});

    newBus.save().then(()=>{
        res.json("Bus Added")
    }).catch((err)=>{
        res.json(send({status: "Error with updating data", error: err.message}))
    });

})




// Displaying all bus info
router.route("/get").get((req,res)=>{

    Bus.find().then((buss)=>{
        res.json(buss);
    }).catch((err)=>{
        console.log(err);
    })

});
// Creating Bus route - Getting bus info by bus ID
router.route("/get/:bus_Id").get(async(req,res)=>{
    let bus_Id = req.params.bus_Id
    const bus = await Bus.findOne({bus_Id : {$eq : bus_Id}}).then((businfo)=>{
        res.status(200).send({businfo})
    }).catch((err)=>{
        console.log(err.message);
    })
})




// Creating Bus route - Updating  bus details
router.route("/update/:bus_Id").put(async(req,res)=>{
    let bus_Id = req.params.bus_Id;
    const {name, no_Plate, owner_Name, date_Rented, rental_Rem} = req.body;

    const updatedBus = {name, no_Plate, owner_Name, date_Rented, rental_Rem}

    const update = await Bus.findOneAndUpdate({bus_Id: {$eq: bus_Id}}, updatedBus).then(()=>{
        res.status(200).send({status: "Bus Updated"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})





// Creating Bus route - Deletion of a bus detail
router.route("/delete/:bus_Id").delete((req,res,next)=>{
    let bus_Id = req.params.bus_Id;
    Bus.findOneAndRemove({bus_Id: {$eq: bus_Id}},(error,data)=>{
       if(error){
           return next(error);
       }else{
           res.status(200).json({
               msg: data
           })
       }
    })
})





// Exporting router for module
module.exports = router;