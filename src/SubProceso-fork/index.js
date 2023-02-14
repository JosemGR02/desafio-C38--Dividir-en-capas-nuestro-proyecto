
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Subproceso |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


import { logger } from '../Configuracion/logger.js';
import { RANDOMS_UTILS } from '../Utilidades/utils-randoms.js';

process.on('message', (cantidadNumPedidos) => {

    logger.info(`cantidad: ${cantidadNumPedidos}`);
    const resultadoUtils = RANDOMS_UTILS.generadorNumRandoms(cantidadNumPedidos);

    process.send(resultadoUtils);
});

