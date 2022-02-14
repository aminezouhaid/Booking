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
  getHoteletoiles,
  deletHotel,
  getHotelbycity,
  // getHotelbycountry
} = require("../controllers/hotelController");

const {
  creatHotelImages,
  getImagesByHotel,
  getImage
} = require("../controllers/HotelsImagesController");

const upload = require('../middlewares/upload')

router.post("/add", upload.single('image_cover'), creatHotel);
router.post("/upload", upload.single('image'), userAuth, checkRole(['admin']), creatHotelImages);
router.get("/imageByHotel/:HotelId", userAuth, checkRole(['admin']), getImagesByHotel);

router.get("/", userAuth, checkRole(['admin']), getHotels);

router.get("/etoile/:hoteletoile", async(req,res)=>{
  await getHoteletoiles(req,res);
});
router.get("/:hotelId", userAuth, checkRole(['admin']), getHotel);
router.patch("/:hotelId", userAuth, checkRole(['admin']), updateHotel);
router.delete("/:hotelId", userAuth, checkRole(['admin']), deletHotel);
router.get("/city/:city", getHotelbycity);
// router.get("/country/:country", getHotelbycountry);

module.exports = router;