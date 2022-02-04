const router = require("express").Router();


const {
    bookingroomproprietair,
    getbookingroom,
    getbookingroomById
  } = require("../controllers/BookingroomController");

  router.post('/addbookingroom', async(req,res)=>{
    await  bookingroomproprietair(req.body,res);
});

router.get('/getbookingroom', async(req,res)=>{
  await   getbookingroom(req,res);
});

router.get('/getbookingroombyid/:bookingroomid', async(req,res)=>{
  await   getbookingroomById(req,res);
});




module.exports = router;
