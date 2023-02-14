
import mongoose from "mongoose";
import { config } from "../../Configuracion/config.js";
import { logger } from "../../Configuracion/logger.js";


const init = async () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(config.DATABASES.mongo.url, {
            dbName: config.DATABASES.mongo.dbName,
        });
        logger.info("La conexion con MongoBD establecida con exito");

    } catch (error) {
        logger.error('ERROR AL CONECTARSE A MongoBD ', error)
    }
};

export const servicioMongoDB = {
    init,
};
