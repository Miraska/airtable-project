// src/controllers/requestController.js
const requestModel = require('../models/requestModel.js');

const getAllRequests = async (req, res) => {
  try {
    const requests = await requestModel.getAllRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
};

const createRequest = async (req, res) => {
  try {
    const newRequest = await requestModel.createRequest(req.body);
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create request' });
  }
};

module.exports = {
  getAllRequests,
  createRequest,
};
