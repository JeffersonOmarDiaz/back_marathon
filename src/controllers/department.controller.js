import { getConnection } from "../database/database";

const getAllDepartments = async (req, res) =>{
    try {
        const connection = await getConnection();
        const sql = `CALL sp_B_get_departments_true()`;
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

const getDepartmentDetails = async (req, res) =>{
    try {
        const id = req.params.id
        const connection = await getConnection();
        const sql = `CALL sp_B_department_details_by_ID('${id}')`;
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



// METODOS POST
const newDepartment = async (req, res) => {
    try {
        const {
            created_byC,
            descriptionC,
            nameC,
            phoneC,
            id_enterprisesC
        } = req.body;
        if (created_byC === undefined || descriptionC === undefined || nameC === undefined 
            || phoneC === undefined || id_enterprisesC === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all field." });
        } else {
            const connection = await getConnection();
            const sql = `CALL sp_C_create_department('${created_byC}',
                                                     '${descriptionC}',
                                                     '${nameC}',
                                                     '${phoneC}',
                                                     '${id_enterprisesC}')`;
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


//METODOS PUT
const uDepartment = async (req, res) => {
    try {
        const id_departamentU = req.params.id;
        const {
                modified_byU,
                status_depU,
                descriptionU,
                nameU,
                phoneU,
                id_enterprisesU } = req.body;
        if (id_departamentU === undefined || id_enterprisesU === undefined || 
            modified_byU === undefined || status_depU === undefined || nameU === undefined || 
            phoneU === undefined || descriptionU === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all field." });
        } else {
            const connection = await getConnection();
            const sql = `CALL sp_U_update_department('${id_departamentU}',
            '${modified_byU}',
            '${status_depU}',
            '${descriptionU}',
            '${nameU}',
            '${phoneU}',
            '${id_enterprisesU}')`;
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

export const methods = {
    getAllDepartments,
    getDepartmentDetails,


    newDepartment,


    uDepartment,
}