const router = require("express").Router();






const {
    Getallclients,
    updateclient,
  } = require("../controllers/Clientcontrollers");



  router.get('/getclient', async(req,res)=>{
    await Getallclients(req,res,"user");
});

router.post('/updateclient/:clientid', async(req,res)=>{
    await updateclient(req,res);
});




















module.exports = router;
