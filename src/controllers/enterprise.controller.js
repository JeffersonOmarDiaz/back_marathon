import { getConnection } from "../database/database";

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

//es necesario exporta la funcion para que esta funcione de forma adecuada 
export const methods = {
    getEnterpises
}