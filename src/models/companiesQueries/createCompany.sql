INSERT INTO companies (company_name)
VALUES ($1) RETURNING *
;
