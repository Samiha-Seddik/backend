const souscatCtr = require('../controls/souscatctr')
const router = require('express').Router();
router.post ('/addsouscat',souscatCtr.addscat)
router.get('/getall',souscatCtr.getall);
router.get('/getone/:id',souscatCtr.getone);
router.delete('/delone/:id',souscatCtr.delone);
router.put('/upsouscat/:id',souscatCtr.updateone);


router.put('/pushprod/:id',souscatCtr.Push);





module.exports = router;