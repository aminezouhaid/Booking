const router = require("express").Router();




const {
    addhotelproprietair,
    updatehotelproprietair,
    delethotelproprietair
  } = require("../controllers/HotelproprietaiController");



  router.post('/addhotelproprietair', async(req,res)=>{
    await addhotelproprietair(req.body,res);
});


router.post('/updatehotelproprietair/:hotelid', async(req,res)=>{
    await updatehotelproprietair(req,res);
});





module.exports = router;
