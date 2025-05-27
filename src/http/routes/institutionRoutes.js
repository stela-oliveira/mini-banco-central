const express = require('express');
const router = express.Router();
const InstitutionController = require('../controllers/institutionController');

router.post('/instituicoes', InstitutionController.createInstitution);
router.get('/instituicoes', InstitutionController.getAllInstitutions);

module.exports = router;