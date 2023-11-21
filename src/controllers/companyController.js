const companyModel = require('../models/Company');

const createCompany = async (req, res) => {
  try {
    const newCompany = await companyModel.createCompany(req.body.company_name);
    res.status(201).json(newCompany);
  } catch (error) {
    console.error('Error creating company:', error.message);
    res.status(500).send('Server Error');
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await companyModel.getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    console.error('Error getting companies:', error.message);
    res.status(500).json({ error: error.message });
  }
};

const updateCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedCompany = await companyModel.updateCompany(id, data);
    res.status(200).json(updatedCompany);
  } catch (error) {
    console.error('Error updating company:', error.message);
    res.status(500).send('Server Error');
  }
};

const deleteCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteCompany = await companyModel.deleteCompany(id);
    res.status(204).json(deleteCompany);
  } catch (error) {
    console.error('Error deleting company:', error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createCompany,
  getAllCompanies,
  updateCompany,
  deleteCompany,
};
