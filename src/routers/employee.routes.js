import { Router } from "express";
import { methods as employeeController } from "../controllers/employee.controller"

const router=Router();

//Metodos GET 

router.get("/g_all_eployees", (employeeController.getAllEmployees));
router.get("/g_employeeBy/:id", (employeeController.getEployeeById));



//Metodos POST
router.post("/i_employee", (employeeController.insertEmployee));

//METODOS PUT
router.put("/u_employee_byId/:id",(employeeController.updateEmployee))





export default router;
