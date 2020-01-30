const prodCtr = require('../controls/produitcontrl');

const multer = require('multer');
const upload = multer({dest : __dirname + '/uploads/Image'})

const router = require('express').Router();

router.get('/list',prodCtr.getall)
router.get('/pr/:id',prodCtr.get_id);
router.delete('/delprod/:id',prodCtr.deleteone)
router.put('/upprod/:id',prodCtr.updateone)

router.post('/addprod',upload.single('image'), prodCtr.addprod); //posting image

router.get('/getfile/:image',prodCtr.getFile) //getting the image from post
router.post('/upload',upload.single('image'),prodCtr.upload) //upload image without adding
module.exports = router;