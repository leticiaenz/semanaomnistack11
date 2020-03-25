const express = require("express");

const OngController = require("./controllers/OngController");

const IncidentController = require("./controllers/IncidentController");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);
routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);

module.exports = routes;
