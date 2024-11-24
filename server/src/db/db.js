const { Client } = require('pg');

// Создание подключения к PostgreSQL
const client = new Client({
  host: 'localhost',        // адрес базы данных (можно заменить на IP или URL)
  port: 5432,               // порт PostgreSQL по умолчанию
  user: 'your-username',    // ваше имя пользователя для подключения
  password: 'your-password',// ваш пароль
  database: 'your-database' // имя базы данных
});

// Подключение к базе данных
client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

module.exports = client;
