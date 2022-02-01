const router = require("express").Router();


const {
    bookingroomproprietair,
  } = require("../controllers/BookingroomController");

  router.post('/addbookingroom', async(req,res)=>{
    await  bookingroomproprietair(req.body,res);
});



module.exports = router;
