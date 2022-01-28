const router = require("express").Router();
const {updateproprietaire, deletpropreataire} = require("../controllers/proprietaireController");


// router.get("/:propreatairId" , getPropreatair);
router.patch("/:propreatairId" , updateproprietaire);
router.delete("/:propreatairId" , deletpropreataire);

// router.delete("/:propreatairId" , deletPropreatair );



module.exports = router;