const router = require("express").Router();
let Parking = require("../models/Parking");

//adding parking details

router.route("/add").post((req,res)=>{

    const Option =req.body.Option;
    const sno = Number(req.body.sno);
    const ssize = Number(req.body.ssize);
    const cno = req.body.cno;
    const rno = req.body.rno;
    const dt = Date(req.body.dt);
    const des = req.body.des;

    
    const newParking = new Parking({

        Option,
        sno,
        ssize,
        cno,
        rno,
        dt,
        des
            

    })

    newParking.save().then(()=>{
        res.json("Parking Slot Added")
    }).catch((err)=>{ //exception handling
        console.log(err);
    })
})

//view parking details
 router.route("/").get((req,res)=>{
    Parking.find().then((Parking_Slots)=>{
        res.json(Parking_Slots)
    }).catch((err)=>{
        console.log(err);
    })
 })


//update parking details
router.route("/update/:id").put(async(req,res)=>{
    let slotId = req.params.id;

    //destructure method
    const { Option, sno, ssize, cno, rno, dt, des} = req.body;

    const updateParking = {
        Option,
        sno,
        ssize,
        cno,
        rno,
        dt,
        des
    }

    const update = await Parking.findByIdAndUpdate(slotId, updateParking).then(()=>{
        res.status(200).send({status: "Slot updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })

    
}) 

//delete parking details
router.route("/delete/:id").delete((req,res,next)=>{
     Parking.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            })
        }
     })
})

//get details from only one user
router.route("/get/:id").get((req,res)=>{
     Parking.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
     })
})


module.exports = router; 