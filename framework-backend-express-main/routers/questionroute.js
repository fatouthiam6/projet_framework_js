const express = require('express');
const router = express.Router();


const   {displayquestion, displayFormquestion, createNewquestion, displayquestionJson, displayquestionDetailed} = require('../controler/questions');


// DEFINITION DES ROUTES

router.get('/', displayquestion);

//point d'acces pour afficher le detail d'un QCM
router.get('/:qcmid', displayquestionDetailed)
// permet l'utilisation de localhost:3000/qcms/2
// qui affiche le qcm ayant pour id 2
// req.params.qcmid
router.get('/json', displayquestionJson);

router.get('/new', displayFormquestion); //handler

router.post('/new', createNewquestion);


//FIN DES ROUTES


module.exports = router;