const Router = require ('express')
const fileUpload = require('express-fileupload');

const router = new Router()
const chapterController = require("../controller/chapterController")

router.post("/chapter", chapterController.createChapter)

router.get("/chapter", chapterController.getChapter)

router.get("/chapter/:id", chapterController.getONEChapter)

router.put("/chapter", chapterController.updateChapter)

router.delete("/chapter/:id", chapterController.deleteChapter)



module.exports = router;

