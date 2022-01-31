const router = require("express").Router();
const {
  
    userAuth,
   
    checkRole
  } = require("../controllers/Auth");
const {updateproprietaire, deletpropreataire} = require("../controllers/proprietaireController");

// router.get("/:propreatairId" , getPropreatair);
router.patch("/:propreatairId" ,userAuth,checkRole(['admin']), updateproprietaire);
router.delete("/:propreatairId" , userAuth,checkRole(['admin']) , deletpropreataire);

// router.delete("/:propreatairId" , deletPropreatair );


module.exports = router;