const router = require("express").Router();
let Salary = require("../models/Salary");

// router.route("/add").post((req,res)=>{

//     const employeeNo = req.body.employeeNo;
//     const salaryMonth = req.body.salaryMonth;
//     const workingDays = Number(req.body.workingDays);
//     const basicPay = Number(req.body.basicPay);
//     const allowance = Number(req.body.allowance);
//     const deduction = Number(req.body.deduction);
//     const monthTax = Number(req.body.monthTax);
//     const salaryNote = req.body.salaryNote;
//     const totDeduction = Number(req.body.totDeduction);
//     const netPay = Number(req.body.netPay);


    

//     const newSalary = new Salary({
//         employeeNo,
//         salaryMonth,
//         workingDays,
//         basicPay,
//         allowance,
//         deduction,
//         monthTax,
//         salaryNote,
//         totDeduction,
//         netPay
//     })

//     newSalary.save().then(()=>{
//         res.json("salary details added")
//     }).catch((err)=>{
//         console.log(err);

//     })
// })


// router.route("/").get((req,res)=>{

//     Salary.find().then((salaries)=>{
//         res.json(salaries)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

// router.route("/update/:id").put(async(req,res)=>{ //url used to update
//     let userId = req.params.id; // fetch the id
//     const {employeeNo, salaryMonth, workingDays, basicPay, allowance, deduction, monthTax, salaryNote, totDeduction, netPay} = req.body;//store the updated data

//     const updateSalary ={
//         employeeNo,
//         salaryMonth,
//         workingDays,
//         basicPay,
//         allowance,
//         deduction,
//         monthTax,
//         salaryNote,
//         totDeduction,
//         netPay
//     }

//     const update = await Salary.findByIdAndUpdate(userId, updateSalary).then(() => {
//         res.status(200).send({status: "user updated"})//if update is succuss this status is used
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send({status: "error with updating data", error: err.message});//if there is any server error 
//     })
// })

// router.route("/delete/:id").delete(async (req,res) => {
//     let userId = req.params.id;

//     await Salary.findOneAndDelete(userId).then(() => {
//         res.status(200).send({status: "user deleted"});//if delete is succuss this status is used
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status: "error with daleting user", error: err.message});//if there is any server error 
//     })
// })

 // CREATE Salary
 router.route('/add').post((req, res, next) => {
    Salary.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });

// READ Salary
router.route('/').get((req, res) => {
    Salary.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  // Get Single Salary
  router.route('/get/:id').get((req, res) => {
    Salary.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  // Get Single Salary
  router.route('/bet/:id').get((req, res) => {
    Salary.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  // Update Salary
router.route('/update/:id').put((req, res, next) => {
    Salary.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Salary updated successfully !')
      }
    })
  })

  // Delete Salary
router.route('/delete/:id').delete((req, res, next) => {
    Salary.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })


// router.route("/get/:id").get(async (req,res) => {
//     let userId = req.params.id;

    // const user = await Salary.findById(userId).then((salary) => {
    //     res.status(200).send({status: "user fetched", salary})//if delete is succuss this status is used
    // }).catch((err) => {
    //     console.log(err.message);
    //     res.status(500).send({status: "error with getting user", error: err.message});//if there is any server error 
    // })
//     await Salary.findById(userId).then(salary=>res.json(salary)) //if delete is succuss this status is used
//     .catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status: "error with getting user", error: err.message});//if there is any server error 
//     })
// })

module.exports = router;