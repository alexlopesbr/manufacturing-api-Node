const pool = require('../../db');

const createCompany = async (company_name) => {
  const result = await pool.query(
    'INSERT INTO companies (company_name) VALUES ($1) RETURNING *',
    [company_name]
  );
  return result.rows[0];
};

const getAllCompanies = async () => {
  const result = await pool.query('SELECT * FROM companies');
  return result.rows;
}

const updateCompany = async (id, data) => {
  if (data.company_name !== null && data.company_name !== undefined) {
    const result = await pool.query(
      'UPDATE companies SET company_name = $1 WHERE id = $2 RETURNING *',
      [data.company_name, id]
    );
    return result.rows[0];
  } else {
    throw new Error('company_name cannot be null or undefined');
  }
};

const deleteCompany = async (id) => {
  await pool.query(
    'DELETE FROM companies WHERE id = $1',
    [id]
  );
};

module.exports = {
  createCompany,
  getAllCompanies,
  updateCompany,
  deleteCompany,
};
