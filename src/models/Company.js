const pool = require('../../db');
const fs = require('fs');
const path = require('path');

const getQuery = (fileName) => {
  const filePath = path.join(__dirname, 'companiesQueries', `${fileName}.sql`);
  return fs.readFileSync(filePath, 'utf8');
};

const createCompany = async (company_name) => {
  const query = getQuery('createCompany');
  const result = await pool.query(query, [company_name]);
  return result.rows[0];
};

const getAllCompanies = async () => {
  const query = getQuery('getAllCompanies');
  const result = await pool.query(query);
  return result.rows;
};

const updateCompany = async (id, data) => {
  if (data.company_name !== null && data.company_name !== undefined) {
    const query = getQuery('updateCompany');
    const result = await pool.query(query, [data.company_name, id]);
    return result.rows[0];
  } else {
    throw new Error('company_name cannot be null or undefined');
  }
};

const deleteCompany = async (id) => {
  const query = getQuery('deleteCompany');
  await pool.query(query, [id]);
};

module.exports = {
  createCompany,
  getAllCompanies,
  updateCompany,
  deleteCompany,
};
