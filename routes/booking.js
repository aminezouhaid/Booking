const router = require("express").Router();


const {
    bookingproprietair,
    updatebooking
  } = require("../controllers/BookingController");



  router.post('/addbooking', async(req,res)=>{
    await bookingproprietair(req.body,res);
});

router.post('/updatebooking/:bookingid', async(req,res)=>{
    await updatebooking(req,res);
});







module.exports = router;
