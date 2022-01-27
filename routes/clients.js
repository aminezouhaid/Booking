const router = require("express").Router();


const {
    Getallclients,
    updateclient,
    deletclient
  } = require("../controllers/Clientcontrollers");



  router.get('/getclient', async(req,res)=>{
    await Getallclients(req,res,"user");
});

router.post('/updateclient/:clientid', async(req,res)=>{
    await updateclient(req,res);
});
router.post('/deletclient/:clientid', async(req,res)=>{
    await deletclient(req,res);
});




module.exports = router;
