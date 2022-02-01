const router = require("express").Router();


const {
    bookingroomproprietair,
    getbookingroom,
  } = require("../controllers/BookingroomController");

  router.post('/addbookingroom', async(req,res)=>{
    await  bookingroomproprietair(req.body,res);
});

router.get('/getbookingroom/:bookingroomid', async(req,res)=>{
  await   getbookingroom(req,res);
});




module.exports = router;
