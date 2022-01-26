const router = require("express").Router();

const {
    addhotel
  } = require("../controllers/Chotel");
router.post('/add', async(req,res)=>{
    await addhotel(req.body,res);
});
module.exports = router;
