# TEMA 7

## Pregunta 1.
**¿Qué es Docker según el temario?**
- a) Una herramienta de virtualización de contenedores que se gestiona por línea de comandos
- b) Un sistema operativo completo para servidores
- c) Una alternativa a GitHub para gestionar código fuente
- d) Un software para crear máquinas virtuales pesadas

 Respuesta correcta: a

---
<br>

## Pregunta 2.
**¿Cuál es la diferencia principal entre una imagen y un contenedor en Docker?**
- a) La imagen es la máquina virtual en ejecución y el contenedor es la plantilla
- b) La imagen es la plantilla para crear contenedores y el contenedor es la instancia en ejecución
- c) La imagen se usa para almacenar datos y el contenedor para procesarlos
- d) La imagen y el contenedor son lo mismo

 Respuesta correcta: b

---
<br>

## Pregunta 3.
**Para comprobar que Docker funciona correctamente tras la instalación en Ubuntu, ¿qué comando se utiliza?**
- a) sudo docker image ls
- b) sudo docker container run hello-world
- c) sudo docker run -it ubuntu
- d) sudo docker container exec hello-world

 Respuesta correcta: b

---
<br>

## Pregunta 4.
**¿Qué comando se utiliza para descargar una imagen de DockerHub?**
- a) docker image save
- b) docker image pull
- c) docker container pull
- d) docker image rm

 Respuesta correcta: b

---
<br>

## Pregunta 5.
**¿Cuál es el formato correcto para especificar una imagen al descargarla?**
- a) nombre_imagen:usuario:tag
- b) usuario/nombre_imagen:tag
- c) tag/nombre_imagen/usuario
- d) nombre_imagen:tag/usuario

 Respuesta correcta: b

---
<br>

## Pregunta 6.
**Según el temario, ¿qué imagen se descarga con el comando: docker image pull mysql/mysql-server:8.0.22?**
- a) La imagen oficial de MySQL sin usuario definido
- b) La imagen de MySQL creada por el usuario "mysql" en su versión 8.0.22
- c) La imagen de Docker de un servidor web
- d) La imagen de MariaDB en versión 10.1

 Respuesta correcta: b

---
<br>

## Pregunta 7.
**Para configurar el proxy en Docker se debe crear un directorio en:**
- a) /etc/docker/config.d
- b) /var/lib/docker/proxy.d
- c) /etc/systemd/system/docker.service.d
- d) /usr/local/docker/proxy

 Respuesta correcta: c

---
<br>

## Pregunta 8.
**¿Qué línea se debe agregar en el archivo http-proxy.conf para configurar el proxy, según el temario?**
- a) Environment="HTTP_PROXY=http://172.16.0.9:8080/"
- b) Proxy="http://172.16.0.9:8080/"
- c) HTTP_PROXY="172.16.0.9:8080"
- d) set HTTP_PROXY=http://172.16.0.9:8080/

 Respuesta correcta: a

---
<br>

## Pregunta 9.
**¿Cuál de las siguientes órdenes NO forma parte de la gestión de imágenes en Docker?**
- a) docker image pull
- b) docker image ls
- c) docker image rm
- d) docker container ls

 Respuesta correcta: d

---
<br>

## Pregunta 10.
**¿Qué comando se utiliza para crear y ejecutar un nuevo contenedor a partir de una imagen?**
- a) docker container start
- b) docker container run
- c) docker image exec
- d) docker container ls

 Respuesta correcta: b

---
<br>

## Pregunta 11.
**En el comando docker container run, **¿qué indica el parámetro -d?**
- a) Ejecutar el contenedor en modo interactivo
- b) Ejecutar el contenedor en modo demonio (background)
- c) Eliminar el contenedor al finalizar
- d) Montar un volumen en el contenedor

 Respuesta correcta: b

---
<br>

## Pregunta 12.
**¿Qué función cumple el parámetro --restart always en el comando docker container run?**
- a) Permite reiniciar el contenedor solo manualmente
- b) Evita que el contenedor se inicie automáticamente
- c) Hace que el contenedor se reinicie automáticamente si se detiene o reinicia la máquina
- d) Actualiza la imagen automáticamente al reiniciar

 Respuesta correcta: c

---
<br>

## Pregunta 13.
**El parámetro -p en el comando docker container run sirve para:**
- a) Especificar variables de entorno
- b) Definir el nombre del contenedor
- c) Mapear puertos entre la máquina real y el contenedor
- d) Establecer el directorio de trabajo

 Respuesta correcta: c

---
<br>

## Pregunta 14.
**¿Cuál es el propósito del parámetro -v en el comando docker container run?**
- a) Establecer la versión de la imagen
- b) Montar un volumen o carpeta real en el contenedor
- c) Verificar la versión de Docker
- d) Ejecutar el contenedor en modo verbose

 Respuesta correcta: b

---
<br>

## Pregunta 15.
**En el ejemplo para ejecutar MariaDB, ¿qué variable de entorno se utiliza para definir la contraseña de root?**
- a) MYSQL_PASSWORD
- b) MYSQL_ROOT_PASSWORD
- c) DB_ROOT_PASS
- d) MARIADB_ROOT

 Respuesta correcta: b

---
<br>

## Pregunta 16.
**¿Cuál es el nombre asignado al contenedor en el ejemplo de ejecución de MariaDB?**
- a) mariadb_container
- b) mysql_server
- c) prueba_mariadb
- d) contenedor_mariadb

 Respuesta correcta: c

---
<br>

## Pregunta 17.
**¿Cuál es la principal diferencia entre los comandos docker container run y docker container exec?**
- a) run ejecuta comandos en un contenedor ya existente y exec crea un nuevo contenedor
- b) run crea y ejecuta un contenedor nuevo, mientras que exec ejecuta órdenes en un contenedor ya en ejecución
- c) Ambos realizan la misma función
- d) run se usa para imágenes y exec para volúmenes

 Respuesta correcta: b

---
<br>

## Pregunta 18.
**¿Qué efecto tiene el parámetro --rm en un comando de Docker?**
- a) Reinicia el contenedor automáticamente
- b) Asigna un nombre al contenedor
- c) Borra el contenedor automáticamente cuando se detiene
- d) Monta un volumen temporal

 Respuesta correcta: c

---
<br>

## Pregunta 19.
**Para establecer el directorio de trabajo dentro de un contenedor al ejecutar un comando, ¿qué opción se utiliza?**
- a) -w
- b) -d
- c) -p
- d) -v

 Respuesta correcta: a

---
<br>

## Pregunta 20.
**Para ejecutar el shell interactivo bash dentro de un contenedor en ejecución, ¿cuál es el comando adecuado?**
- a) docker container run -it nombre_container /bin/bash
- b) docker container exec -it nombre_container /bin/bash
- c) docker container start -it nombre_container bash
- d) docker exec -d nombre_container /bin/bash

 Respuesta correcta: b

---