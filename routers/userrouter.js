const userCtr = require('../controls/usercontrollers');
const router = require('express').Router();

router.post('/adduser',userCtr.adduser);
router.get('/getall',userCtr.getall)
router.get('/getone/:id',userCtr.getone);
router.delete('/deleteone/:id',userCtr.deleteone)
router.put('/upuser/:id',userCtr.updateone)
router.post('/auth',userCtr.authent)



module.exports = router;