const router = require("express").Router();


const {
    bookingproprietair,
  } = require("../controllers/BookingController");



  router.post('/addbooking', async(req,res)=>{
    await bookingproprietair(req.body,res);
});






module.exports = router;
