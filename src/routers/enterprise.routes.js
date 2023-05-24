import { Router } from "express";
import { methods as enterpriseController } from "../controllers/enterprise.controller";

const router=Router(); // a a permitir manejar las rutas de nuestro proyecto

router.get("/g_all_enterprises_true",(enterpriseController.getEnterpises));


export default router;