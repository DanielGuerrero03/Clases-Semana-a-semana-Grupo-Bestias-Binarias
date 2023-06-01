import logging as log

# docs.python.org/3/howto/logging.html
# Llamamos una configuracion basica

if __name__ == '__main__':

    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('Mensaje a nivel error')
    log.critical('Mensaje a nivel critical')
