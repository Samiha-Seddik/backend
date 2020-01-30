
const achCtr = require('../controls/acheteurCtr');
const router = require('express').Router();


router.post('/achadd',achCtr.addacheteur);
router.get('/getall',achCtr.getall);
router.get('/getone/:id',achCtr.getone);
router.delete('/delone/:id',achCtr.delone);
router.put('/upach/:id',achCtr.updateone)


module.exports = router ;