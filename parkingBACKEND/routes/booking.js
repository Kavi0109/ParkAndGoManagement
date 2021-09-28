
const router = require("express").Router();

let Booking = require("../models/Booking");



//Insert data

router.route("/addRishma").post((req,res)=>{

    const BookingID = req.body.BookingID;
    const Firstname = req.body.Firstname;
    const Lastname = req.body.Lastname;
    const Contactnumber = Number(req.body.Contactnumber);
    const Address =req.body.Address;
    const PlateNumber =req.body.PlateNumber;
    const VehicleModel=req.body.VehicleModel;
    const EntryDate=Date(req.body.EntryDate);
    const ExitDate=Date(req.body.ExitDate);
    const BusNo=req.body.BusNo;
    const BusRoute=req.body.BusRoute;
    const CardNo=req.body.CardNo;
    const CardHolderName=req.body.CardHolderName;
    const ExpireDate=Date(req.body.ExpireDate);
    const SecurityCode=Number(req.body.SecurityCode);


    const newBooking = new Booking({

        BookingID,
        Firstname,
        Lastname,
        Contactnumber,
        Address,
        PlateNumber,
        VehicleModel,
        EntryDate,
        ExitDate,
        BusNo,
        BusRoute,
        CardNo,
        CardHolderName,
        ExpireDate,
        SecurityCode   
    })



    newBooking.save().then(()=>{
        res.json("Booking Successfully added")
    }).catch((err)=>{
        console.log(err);
    })

})




//update data

router.route("/update-booking/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {BookingID, Firstname,Lastname,Contactnumber,Address,PlateNumber,VehicleModel,EntryDate,ExitDate,BusNo,BusRoute,CardNo,CardHolderName,ExpireDate,SecurityCode} = req.body;


    const updateBooking ={
      BookingID,
      Firstname,
      Lastname,
      Contactnumber,
      Address,
      PlateNumber,
      VehicleModel,
      EntryDate,
      ExitDate,
      BusNo,
      BusRoute,
      CardNo,
      CardHolderName,
      ExpireDate,
      SecurityCode
    }




    const update = await Booking.findByIdAndUpdate(userId,{updateBooking}).then(()=>{
        res.status(200).send({status: "Booking Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating booking",error:err.message})
    })   
})



// Update Student
/*router.route('/update-booking/:id').put((req, res, next) => {
    Booking.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Booking updated successfully !')
      }
    })
})*/





// Delete Student
router.route('/delete-booking/:id').delete((req, res, next) => {
    Booking.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
})




  
// READ all the Booking
router.route('/allBooking').get((req, res) => {
    Booking.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})

// Get Single Booking
router.route('/edit-booking/:id').get((req, res) => {
    Booking.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Get Single Booking(booking slip)
router.route('/dis-booking/:id').get((req, res) => {
  Booking.findById(req.params.id, (error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
})




module.exports = router;
