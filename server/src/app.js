// src/app.js
const express = require('express');
const requestRoutes = require('./routes/requestRoutes.js');
const syncService = require('./services/syncService.js');
const app = express();

app.use(express.json());
app.use('/api', requestRoutes);

// Старт синхронизации
syncService.syncAirtableToDB();

module.exports = app;
