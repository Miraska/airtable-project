// server/src/services/syncService.js
const Airtable = require('airtable');
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = require('../config/airtableConfig');

// Инициализация Airtable
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

// Пример функции синхронизации
const syncAirtableToDB = async () => {
  try {
    const records = await base('tblYzFLRCr4G1Apae').select().firstPage();
    console.log(records);
    // Логика синхронизации данных с БД
  } catch (error) {
    console.error('Error syncing Airtable to DB:', error);
  }
};

module.exports = { syncAirtableToDB };
