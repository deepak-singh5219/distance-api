const express =  require('express');
const router = express.Router();

const {getNearby} = require('../controllers/appcontroller');

router.post('/getNearby',getNearby);
module.exports = router;