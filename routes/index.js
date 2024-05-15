const tokenMiddleware = require("../middleware/user.middleware"); //Middleware
const loginController = require("../controllers/login.controller"); // Controllers
const empleadoController = require("../controllers/empleado.controller"); // Controllers
const tareaController = require("../controllers/tarea.controller"); // Controllers

function allRoutes(app) {
  const router = require("express").Router();
  router.post("/token", loginController);
  router.post(
    "/crear",
    // tokenMiddleware,
    empleadoController.createUser
  );
  router.post(
    "/creartarea",
    // tokenMiddleware,
    tareaController.createTarea
  );
  router.get(
    "/todo",
    //  tokenMiddleware,
    empleadoController.findAll
  );
  router.get("/tarea", tareaController.getTarea);
  router.get("/statusempleado/:id", empleadoController.changeStatus);
  router.get("/statutask/:id", tareaController.changeStatus);
  router.delete("/deletetarea/:id", tareaController.deletetarea);
  app.use(router);
}

module.exports = allRoutes;
