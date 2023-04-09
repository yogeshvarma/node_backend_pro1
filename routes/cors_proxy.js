const express = require('express');
const proxyController = require('../controllers/proxy_controller');

const proxyRouter = express.Router();

proxyRouter.get("/v1/corsRequest", proxyController.proxyRequest);

module.exports = proxyRouter;