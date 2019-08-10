const express = require("express");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");

const controllers = require("./app/controllers");

routes.post("/users", controllers.UserController.store);
routes.post("/session", controllers.SessionController.store);

routes.use(authMiddleware);

routes.get("/ads", controllers.AdsController.index);
routes.get("/ads/:id", controllers.AdsController.show);
routes.post("/ads", controllers.AdsController.store);
routes.put("/ads/:id", controllers.AdsController.update);
routes.delete("/ads/:id", controllers.AdsController.destroy);

module.exports = routes;
