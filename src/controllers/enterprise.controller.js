import { getConnection } from "../database/database";

//METODOS GET
const getEnterpises = async (req, res) =>{
    try {
        const connection = await getConnection();
        const sql = `CALL sp_B_get_enterprisesTRUE()`;
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

const getEnterpisesDetails = async (req, res) =>{
    try {
        const id = req.params.id;
        const connection = await getConnection();
        const sql = `CALL sp_B_get_enterprisesDetailsById('${id}')`;
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
const insertEnterprise = async (req, res) => {
    try {
        const {
            created_byC,
            enterpriseNameC,
            phoneC
        } = req.body;
        if (created_byC === undefined || enterpriseNameC === undefined || phoneC === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all field." });
        } else {
            const connection = await getConnection();
            const sql = `CALL sp_C_create_enterprise('${created_byC}',
                                                     '${enterpriseNameC}',       
                                                     '${phoneC}')`;
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
const updateEnterprise = async (req, res) => {
    try {
        const id_enterprisesU = req.params.id;
        const {
            modified_byU,
            statusU,
            nameU,
            phoneU } = req.body;
        if (id_enterprisesU === undefined || modified_byU === undefined || statusU === undefined || nameU === undefined || phoneU === undefined) {
            res.status(400).json({ message: "Bad request. Please fill all field." });
        } else {
            const connection = await getConnection();
            const sql = `CALL sp_U_update_enterprise('${id_enterprisesU}',
                                                     '${modified_byU}',
                                                     '${statusU}',
                                                     '${nameU}',
                                                     '${phoneU}')`;
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

//es necesario exporta la funcion para que esta funcione de forma adecuada 
export const methods = {
    getEnterpises,
    getEnterpisesDetails,



    insertEnterprise,


    updateEnterprise,
}