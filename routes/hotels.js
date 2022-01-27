const router = require("express").Router();
const {creatHotel, addHotel, getHotel, updateHotel, deletHotel} = require("../controllers/hotelController");

router.post("/add" , creatHotel);
router.get("/" , addHotel);
router.get("/:hotelId" , getHotel);
router.patch("/:hotelId" , updateHotel );
router.delete("/:hotelId" , deletHotel );



module.exports = router;