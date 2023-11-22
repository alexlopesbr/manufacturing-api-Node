UPDATE companies
SET company_name = $1
WHERE id = $2 RETURNING *
;
