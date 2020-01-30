const vendCtr = require('../controls/vendeurCtr');
const multer = require('multer');
const upload = multer({dest:__dirname + '/uploads/Image'});
const router = require('express').Router();



//router.post('/add', upload.single('image'), vendCtr.addvendeur);

router.post('/addvend',upload.single('image'),vendCtr.Add);
router.get('/getall',vendCtr.getall);
router.get('/getone/:id',vendCtr.getone);
router.delete('/delven/:id',vendCtr.delone);
router.put('/upvend/:id',vendCtr.updateone);

router.get('/getfile/:image',vendCtr.getFile)

module.exports = router;