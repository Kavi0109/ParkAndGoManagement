const router = require("express").Router();
let Stm = require("../models/staff-member")


// Adding staff
router.route("/add").post((req,res)=>{

    const {stm_Id, name, type, phone, date_Reg} = req.body;

    const newStm = new Stm({stm_Id, name, type, phone, date_Reg})

    newStm.save().then(()=>{
        res.json("Staff Added")
    }).catch((err)=>{
        console.log(err);
        res.send({status: "Error with updating data", error: err.message});
    })
})


// Displaying all staff info
router.route("/get").get((req,res)=>{

    Stm.find().then((staffy)=>{
        res.json(staffy);
    }).catch((err)=>{
        console.log(err);
    })

});
// Creating Staff route - Getting staff info by staff ID
router.route("/get/:stm_Id").get(async(req,res)=>{
    let stm_Id = req.params.stm_Id
    const staff = await Stm.findOne({stm_Id : {$eq : stm_Id}}).then((staffinfo)=>{
        res.status(200).send({staffinfo})
    }).catch((err)=>{
        console.log(err.message);
    })
})



// Creating Staff route - Updating  staff details
router.route("/update/:stm_Id").put(async(req,res)=>{
    let stm_Id = req.params.stm_Id;
    const {name, type, phone, date_Reg} = req.body;

    const updatedStm = {name, type, phone, date_Reg}

    const update = await Stm.findOneAndUpdate({stm_Id: {$eq: stm_Id}}, updatedStm).then(()=>{
        res.status(200).send({status: "Staff Member Updated"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})



// Creating Staff route - Deletion of a staff detail
router.route("/delete/:stm_Id").delete((req,res,next)=>{
    let stm_Id = req.params.stm_Id;
    Stm.findOneAndRemove({stm_Id: {$eq: stm_Id}},(error,data)=>{
       if(error){
           return next(error);
       }else{
           res.status(200).json({
               msg: data
           })
       }
    })
})



//expporting
module.exports = router;