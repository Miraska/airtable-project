// src/models/requestModel.js
const db = require('../config/dbConfig'); // Импортируем настройки БД

const createRequest = async (data) => {
  const { rows } = await db.query(
    'INSERT INTO requests(autonumber, status, manager, date_created, ...) VALUES($1, $2, $3, $4, ...) RETURNING *',
    [data.autonumber, data.status, data.manager, data.dateCreated]
  );
  return rows[0];
};

const getRequestById = async (id) => {
  const { rows } = await db.query('SELECT * FROM requests WHERE id = $1', [id]);
  return rows[0];
};

module.exports = {
  createRequest,
  getRequestById,
};
