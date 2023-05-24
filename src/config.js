import {config} from "dotenv";

config();

export default {
    // LO QUE SE PONE DE TIPO || "" ES ´POR SI NO ENCUENTRA LOS VALORES DESCRITOS
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};