const express = require('express');
const companyController = require('../controllers/companyController');
const router = express.Router();


router.post('/', async (req, res) => {
  await companyController.createCompany(req, res);
});
router.get('/', async (req, res) => {
  await companyController.getAllCompanies(req, res);
});
router.put('/:id', async (req, res) => {
  await companyController.updateCompany(req, res);
});
router.delete('/:id', async (req, res) => {
  await companyController.deleteCompany(req, res);
});

module.exports = router;
