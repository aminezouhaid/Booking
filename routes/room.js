const router = require("express").Router();
const {

    userAuth,

    checkRole
} = require("../controllers/Auth");
const {
    creatRoom,
    getRooms,
    getRoom,
    updateRoom,
    deletRoom, 
   searchRoom
} = require("../controllers/RoomController");


const upload = require('../middlewares/upload')

router.post("/add", upload.single('image_cover'), userAuth, checkRole(['admin']), creatRoom);


router.get("/", getRooms);
router.get("/:hotelId",  getRoom);
router.patch("/:hotelId", updateRoom);
router.delete("/:hotelId",  deletRoom);
router.get("/", getRooms);
router.get("/:roomId",  getRoom);
router.patch("/:roomId",  updateRoom);
router.delete("/:roomId", deletRoom);
router.post("/search", searchRoom);





module.exports = router;



module.exports = router;