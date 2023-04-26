# DECLARAMOS UNA VARIABLE
try:
    archivo = open("prueba.txt", "w")  # La W de write que significa escribir
except Exception as e:
    print(e)
finally:  # siempre se ejecuta
    archivo.close()  # Con esto se debe cerrar el archivo



try:
    archivo = open("prueba.txt", "w")  # La W de write que significa escribir
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("Con esto terminamos")
except Exception as e:
    print(e)
finally:  # siempre se ejecuta
    archivo.close()  # Con esto se debe cerrar el archivo