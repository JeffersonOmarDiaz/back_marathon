import express from "express"
import morgan from "morgan"

 //routes
 import enterpriseRoutes from "./routers/enterprise.routes";

 import employeesRoutes from "./routers/employee.routes";

 const app=express();


//settings para el puerto por el que va a funcionar 
app.set('port', process.env.PORT || 3000);

//middlewares => funcion entre una peticion y una respuesta
app.use(morgan("dev"));
app.use(express.json()); // para que reconosca ingreso de archivos tipo json


//routes

app.use("/api/enterprises", enterpriseRoutes);
app.use("/api/employees", employeesRoutes);
export default app;  