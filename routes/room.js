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
    deletRoom
} = require("../controllers/RoomController");


const upload = require('../middlewares/upload')

router.post("/add", upload.single('image_cover'), userAuth, checkRole(['admin']), creatRoom);


router.get("/", userAuth, checkRole(['admin']), getRooms);
router.get("/:hotelId", userAuth, checkRole(['admin']), getRoom);
router.patch("/:hotelId", userAuth, checkRole(['admin']), updateRoom);
router.delete("/:hotelId", userAuth, checkRole(['admin']), deletRoom);



module.exports = router;