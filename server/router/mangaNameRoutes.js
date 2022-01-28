const Router = require ('express')
const fileUpload = require('express-fileupload');

const router = new Router()
const mangaNameControllers = require("../controller/mangaNameControllers")

router.post("/name", mangaNameControllers.createMangaName)

router.get("/name", mangaNameControllers.getMangaName)

router.get("/name/:id", mangaNameControllers.getONEmangaName)

router.put("/name", mangaNameControllers.updateMangaName)

router.delete("/name/:id", mangaNameControllers.deleteMangaName)



module.exports = router;

