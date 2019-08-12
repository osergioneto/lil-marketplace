const express = require("express");
const validate = require("express-validation");
const handle = require("express-async-handler");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");

const controllers = require("./app/controllers");
const validators = require("./app/validators");

routes.post(
  "/users",
  validate(validators.User),
  handle(controllers.UserController.store)
);
routes.post(
  "/session",
  validate(validators.Session),
  handle(controllers.SessionController.store)
);

routes.use(authMiddleware);

routes.get("/ads", handle(controllers.AdsController.index));
routes.get("/ads/:id", handle(controllers.AdsController.show));
routes.post(
  "/ads",
  validate(validators.Ad),
  handle(controllers.AdsController.store)
);
routes.put(
  "/ads/:id",
  validate(validators.Ad),
  handle(controllers.AdsController.update)
);
routes.delete("/ads/:id", handle(controllers.AdsController.destroy));

routes.post(
  "/purchases",
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
);

module.exports = routes;
