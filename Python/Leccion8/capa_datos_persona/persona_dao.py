from conexion import Conexion
from Persona import Persona
from logger_base import log

class PersonaDAO:
    '''
    DAO significa:  Data Access Object
    CRUD significa :
     Create -> INSERTAR
     Read   -> SELECCIONAR
     Update -> ACTUALIZAR
     Delete -> ELIMINAR
    '''

    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELETE FROM persona WHERE id_persona=%s'













    

    @classmethod
    def eliminar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.id_persona,)
                cursor.execute(cls._ELIMINAR, valores)
                log.debug(f'Los objetos eliminados son: {persona}')
                return cursor.rowcount


if __name__ == '__main__':

    #Eliminar un registro
    #persona1 = Persona(id_persona=13)
    #personas_eliminadas = PersonaDAO.eliminar(persona1)
    #log.debug(f'Personas eliminadas: {personas_eliminadas}')

 
