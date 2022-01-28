const Router = require ('express')
const fileUpload = require('express-fileupload');

const router = new Router()
const mangaNameControllers = require("../controller/pageControllers")

router.post("/page", mangaNameControllers.createChapter)

router.get("/page", mangaNameControllers.getPage)

router.get("/page/:id", mangaNameControllers.getOnePage)

router.put("/page", mangaNameControllers.updatePage)

router.delete("/page/:id", mangaNameControllers.deletePage)




module.exports = router;