const catCtr = require('../controls/catcontrollor');
const router = require('express').Router();


router.post('/add',catCtr.addcat);
router.get('/list',catCtr.getall)
router.get('/:id',catCtr.getid);
router.delete('/delcat/:id',catCtr.deleteone)
router.put('/upcat/:id',catCtr.updateone)
router.put('/pushsouscat/:id',catCtr.Push)

module.exports = router;