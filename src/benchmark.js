
import autocannon from 'autocannon';
import { PassThrough } from 'stream';
import { logger } from './Configuracion/logger.js';

function run(url) {
    const buf = []
    const outputStream = new PassThrough()

    const inst = autocannon({
        url,
        connections: 100,
        duration: 20
    })

    autocannon.track(inst, { outputStream })

    outputStream.on('data', data => buf.push(data))
    inst.on('done', () => {
        process.stdout.write(Buffer.concat(buf))
    })
}

logger.info('Ejecutar todas las pruebas en paralelo...')

run('http://localhost:8080/api/info/bloq')
run('http://localhost:8080/api/info/nobloq')


import autocannon from 'autocannon';
import { PassThrough } from 'stream';
