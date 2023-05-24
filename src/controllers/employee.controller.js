import { getConnection } from "../database/database";
//METODOS GET
const getAllEmployees = async (req, res) =>{
    try {
        const connection = await getConnection();
        const sql = `CALL sp_B_getAllEmplyeesTrue()`;
        const result = await connection.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                console.log(rows[0]);
                res.json(rows[0]);
            }
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getEployeeById = async (req, res) =>{
    try {
        const idEmployee= req.params.id;
        const connection = await getConnection();
        console.log(idEmployee);
        const sql = `CALL sp_B_geEmplyeesById('${idEmployee}')`;
        const result = await connection.query(sql, (err, rows, fields) => {
            if (err) throw err;
            else {
                console.log(rows[0]);
                res.json(rows[0]);
            }
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}



//METODOS POST
const insertEmployee = async (req, res) => {
    try {
        const {
            created_byC,
            ageC,
            emailC,
            nameC,
            employee_positionC,
            surnameC
        } = req.body;
        if (created_byC === undefined || ageC === undefined || emailC === undefined || nameC === undefined ||
            employee_positionC === undefined || surnameC === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all field." });
        } else {
            const connection = await getConnection();
            const sql = `CALL sp_C_create_employe('${created_byC}',
                                                    '${ageC}',
                                                    '${emailC}',
                                                    '${nameC}',
                                                    '${employee_positionC}',
                                                    '${surnameC}')`;

            const result = await connection.query(sql, (err, rows, fields) => {
                if (err) {
                    res.status(500);
                    res.send(err.message);
                    //throw err;
                } else {
                    console.log(rows[0]);
                    res.json(rows[0]);
                }
            });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}



// METODOS DE TIPO PUT 
const updateEmployee = async (req, res) => {
    try {
        const id_employeesU = req.params.id;
        const {
                modified_byU,
                status_employeU,
                ageU ,
                emailU ,
                nameU ,
                employee_positionU ,
                surnameU
            } = req.body;
            console.log(id_employeesU);
            console.log(req.body);
        if (id_employeesU === undefined || modified_byU === undefined || status_employeU=== undefined || ageU=== undefined ||
            emailU=== undefined || nameU=== undefined || employee_positionU === undefined || surnameU === undefined) {
                res.status(400).json({ message: "Bad request. Please fill all field." });
        }    else{
            const conn = await getConnection();
            const sql = `CALL sp_U_employees('${id_employeesU}',
                                            '${modified_byU}',
                                            '${status_employeU}',
                                            '${ageU}',
                                            '${emailU}',
                                            '${nameU}',
                                            '${employee_positionU}',
                                            '${surnameU}')`;
            const result = await conn.query(sql, (err, rows, fields) => {
                if (err) {
                    res.status(502);
                    res.send(err.message);
                    //throw err;
                } else {
                    console.log(rows[0]);
                    res.json(rows[0]);
                }
            });
        }
    } catch (error) {
        res.status(500);
        res.send(err.message);
    }
}



export const methods = {
    getAllEmployees,
    getEployeeById,


    insertEmployee,


    updateEmployee,

}

