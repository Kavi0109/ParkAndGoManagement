const router = require("express").Router();
let Leave = require("../models/Leave");

router.route("/addl").post((req,res)=>{

         const employeeNo = req.body.employeeNo;
         const fromDate = req.body.fromDate;
         const noOfDays = Number(req.body.noOfDays);
         const reason = req.body.reason;
         
    
    
        
    
         const newLeave = new Leave({
             employeeNo,
             fromDate,
             noOfDays,
             reason
            
         })
    
         newLeave.save().then(()=>{
             res.json("leave details added")
         }).catch((err)=>{
             console.log(err);
    
         })
     })

    router.route("/l").get((req,res)=>{

    Leave.find().then((leaves)=>{
         res.json(leaves)
     }).catch((err)=>{
         console.log(err)
     })
 })

 router.route("/getl/:id").get(async (req,res) => {
         let userId = req.params.id;
    
         const user = await Leave.findById(userId).then((leave) => {
             res.status(200).send({status: "user fetched", leave})//if delete is succuss this status is used
         }).catch((err) => {
             console.log(err.message);
             res.status(500).send({status: "error with getting user", error: err.message});//if there is any server error 
         })
        
     })

     module.exports = router;