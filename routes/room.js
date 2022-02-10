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

router.post("/add", upload.single('image_cover'), creatRoom);


router.get("/", getRooms);
router.get("/:roomId",  getRoom);
router.patch("/:roomId",  updateRoom);
router.delete("/:roomId", deletRoom);



module.exports = router;



