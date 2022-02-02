const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {
  creatHotel,
  getHotels,
  getHotel,
  updateHotel,
  deletHotel
} = require("../controllers/hotelController");

const {
  creatHotelImages,
  getImagesByHotel,
  getImage
} = require("../controllers/HotelsImagesController");

const upload = require('../middlewares/upload')

router.post("/add", upload.single('image_cover'), userAuth, checkRole(['admin']), creatHotel);
router.post("/upload", upload.single('image'), userAuth, checkRole(['admin']), creatHotelImages);
router.get("/imageByHotel/:HotelId", userAuth, checkRole(['admin']), getImagesByHotel);

router.get("/", userAuth, checkRole(['admin']), getHotels);
router.get("/:hotelId", userAuth, checkRole(['admin']), getHotel);
router.patch("/:hotelId", userAuth, checkRole(['admin']), updateHotel);
router.delete("/:hotelId", userAuth, checkRole(['admin']), deletHotel);



module.exports = router;