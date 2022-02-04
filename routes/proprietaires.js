const router = require("express").Router();
const {
  
    userAuth,
   
    checkRole
  } = require("../controllers/Auth");
const {Getallproprietaires,updateproprietaire, deletpropreataire} = require("../controllers/proprietaireController");
//router.getAllPropratire

router.get('/getproprtaire',userAuth,checkRole(['admin']), async(req,res)=>{
  await Getallproprietaires(req,res,"owner-user");
});

// router.get("/:propreatairId" , getPropreatair);
router.patch("/:propreatairId" ,userAuth,checkRole(['admin']), updateproprietaire);
router.delete("/:propreatairId" , userAuth,checkRole(['admin']) , deletpropreataire);

// router.delete("/:propreatairId" , deletPropreatair );


module.exports = router;