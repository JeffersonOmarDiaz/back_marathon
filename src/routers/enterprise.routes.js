import { Router } from "express";
import { methods as enterpriseController } from "../controllers/enterprise.controller";

const router=Router(); // a a permitir manejar las rutas de nuestro proyecto


//Metodos GET 
router.get("/g_all_enterprises_true",(enterpriseController.getEnterpises));
router.get("/g_enterprises_detailbyId/:id",(enterpriseController.getEnterpisesDetails));


//Metodos POST
router.post("/i_enterprise",(enterpriseController.insertEnterprise));


//Metodos PUT
router.put("/u_enterprise/:id",(enterpriseController.updateEnterprise));


export default router;