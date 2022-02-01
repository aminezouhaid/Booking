const router = require("express").Router();




const {
    addhotelproprietair,
  } = require("../controllers/HotelproprietaiController");



  router.post('/addhotelproprietair', async(req,res)=>{
    await addhotelproprietair(req.body,res);
});

// router.get('/getbooking', async(req,res)=>{
//   await   getbooking(req,res);
// });

// router.post('/updatebooking/:bookingid', async(req,res)=>{
//     await updatebooking(req,res);
// });






module.exports = router;
