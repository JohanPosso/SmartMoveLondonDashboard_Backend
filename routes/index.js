const tokenMiddleware = require("../middleware/user.middleware");
const loginController = require("../controllers/login.controller");
const empleadoController = require("../controllers/empleado.controller");
const tareaController = require("../controllers/tarea.controller");
const whatsappController = require("../controllers/whatsapp.controller");

function allRoutes(app) {
  const router = require("express").Router();
  router.post("/token", loginController);
  router.post(
    "/crear",
    // tokenMiddleware,
    empleadoController.createUser
  );
  router.post(
    "/crearadmin",
    // tokenMiddleware,
    empleadoController.createAdmin
  );
  router.put(
    "/edituser/:id",
    // tokenMiddleware,
    empleadoController.editUser
  );
  router.get(
    "/empleado/:id",
    // tokenMiddleware,
    empleadoController.findEmployeeId
  );
  router.post(
    "/creartarea",
    // tokenMiddleware,
    tareaController.createTarea
  );

  router.post("/sendmsg", whatsappController.sendMessage);
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
