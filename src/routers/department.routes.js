import { Router } from "express";
import { methods as departmentController } from "../controllers/department.controller"

const router=Router();

//Metodos GET 
router.get("/g_all_departments", (departmentController.getAllDepartments));

router.get("/g_departments_details/:id", (departmentController.getDepartmentDetails));


//METODOS POST 
router.post("/i_department", (departmentController.newDepartment));


//METODOS PUT
router.put("/u_department/:id", (departmentController.uDepartment));


export default router;