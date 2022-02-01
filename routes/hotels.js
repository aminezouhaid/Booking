const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {
  creatHotel,
  addHotel,
  getHotel,
  updateHotel,
  deletHotel
} = require("../controllers/hotelController");

const upload = require('../middlewares/upload')

router.post("/add", upload.single('image_cover'), userAuth, checkRole(['admin']), creatHotel);
router.get("/", userAuth, checkRole(['admin']), addHotel);
router.get("/:hotelId", userAuth, checkRole(['admin']), getHotel);
router.patch("/:hotelId", userAuth, checkRole(['admin']), updateHotel);
router.delete("/:hotelId", userAuth, checkRole(['admin']), deletHotel);



module.exports = router;