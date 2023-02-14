
import { config } from "../Configuracion/config.js";
import { servicioMongoDB } from "../Servicios/index.js";
import { MensajesMongoBD, MensajesFilesystem, MensajesChat } from "./Mensajes/index.js";
import { ProductosMongoBD, ProductosFileSystem } from "./Productos/index.js";
import { UsuariosMongoBD, UsuariosFileSystem } from "./Usuarios/index.js";


const obtenerDaoSeleccionados = () => {
  switch (config.SERVER.SELECCION_BASEdDATOS) {
    case "mongo": {
      servicioMongoDB.init();
      return {
        DaoProducto: new ProductosMongoBD(),
        DaoUsuario: new UsuariosMongoBD(),
        DaoMensaje: new MensajesMongoBD(),
        DaoChat: new MensajesChat(),
      };
    }
    case "filesystem": {
      return {
        DaoProducto: new ProductosFileSystem(),
        DaoUsuario: new UsuariosFileSystem(),
        DaoMensaje: new MensajesFilesystem(),
        DaoChat: new MensajesChat(),
      };
    }
  }
};

const { DaoProducto, DaoMensaje, DaoChat, DaoUsuario } = obtenerDaoSeleccionados();

export { DaoProducto, DaoMensaje, DaoChat, DaoUsuario };



