class PersonaDAO:
    """
    DAO significa: Data Acces Objet
    CRUD significa
                   Create -> Innsertar
                   Read -> Seleccionar
                   Update -> Actualizar
                   Delete -> Eliminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDER BY id_persona' \
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%, apellido=%s, email=%s WHERE id_persona=%'
    _ELIMINAR= 'DELETE FROM persona WHERE id_persona=%s'