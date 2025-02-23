# TEMA 8

## Pregunta 1.
**¿Cuál es el comando utilizado para construir imágenes Docker avanzadas a partir de un Dockerfile?**
- a) docker build
- b) docker buildx build
- c) docker image create
- d) a y b son correctas

 Respuesta correcta: d

---
<br>

## Pregunta 2.
**En el comando: docker buildx build --tag nombre_imagen:etiqueta --file ruta_del_dockerfile ruta_contexto_ficheros**
**¿Qué indica la opción --tag?**
- a) La ruta del Dockerfile
- b) El nombre y etiqueta de la imagen a crear
- c) El contexto de los ficheros
- d) La versión de Docker

 Respuesta correcta: b

---
<br>

## Pregunta 3.
**En un Dockerfile, ¿qué instrucción se utiliza para especificar la imagen base?**
- a) BASE
- b) FROM
- c) IMAGE
- d) INIT

 Respuesta correcta: b

---
<br>

## Pregunta 4.
**¿Cuál es la diferencia principal entre las instrucciones RUN y CMD en un Dockerfile?**
- a) RUN se ejecuta al iniciar el contenedor y CMD durante la construcción de la imagen
- b) RUN se ejecuta durante la construcción de la imagen y CMD al iniciar el contenedor
- c) Ambas se ejecutan al mismo tiempo
- d) CMD se utiliza para copiar archivos y RUN para configurar el entorno

 Respuesta correcta: b

---
<br>

## Pregunta 5.
**¿Qué instrucción se utiliza para copiar archivos desde la máquina host hacia el contenedor?**
- a) ADD
- b) COPY
- c) MOVE
- d) IMPORT

 Respuesta correcta: b

---
<br>

## Pregunta 6.
**La instrucción EXPOSE en un Dockerfile sirve para:**
- a) Publicar automáticamente el puerto en el host
- b) Informar a Docker que el contenedor escuchará en un puerto específico en tiempo de ejecución
- c) Abrir el puerto en el firewall del host
- d) Definir la variable de entorno del puerto

 Respuesta correcta: b

---
<br>

## Pregunta 7.
**¿Qué función cumple la instrucción WORKDIR en un Dockerfile?**
- a) Ejecutar comandos de inicio
- b) Establecer el directorio de trabajo para instrucciones posteriores
- c) Definir el directorio donde se almacenan los logs
- d) Copiar archivos al contenedor

 Respuesta correcta: b

---
<br>

## Pregunta 8.
**¿Con qué instrucción se definen variables de entorno en un Dockerfile?**
- a) VAR
- b) SET
- c) ENV
- d) DEFINE

 Respuesta correcta: c

---
<br>

## Pregunta 9.
**La instrucción CMD en un Dockerfile tiene como finalidad:**
- a) Especificar el comando predeterminado que se ejecutará al iniciar el contenedor
- b) Ejecutar comandos durante la construcción de la imagen
- c) Iniciar el servicio de Docker en el host
- d) Establecer el directorio de trabajo

 Respuesta correcta: a

---
<br>

## Pregunta 10.
**¿Qué es Docker Compose?**
- a) Una herramienta para construir imágenes Docker
- b) Una herramienta para definir y administrar aplicaciones multi-contenedor mediante un archivo YAML
- c) Un servicio de monitorización de contenedores
- d) Una alternativa a Kubernetes

 Respuesta correcta: b

---
<br>

## Pregunta 11.
**En un archivo docker-compose.yml, ¿cuál es la sección que define los servicios a desplegar?**
- a) containers
- b) images
- c) services
- d) apps

 Respuesta correcta: c

---
<br>

## Pregunta 12.
**¿Qué comando se utiliza para iniciar, en segundo plano, los contenedores definidos en un docker-compose.yml?**
- a) docker compose start -d
- b) docker compose up -d
- c) docker compose run -d
- d) docker-compose init -d

 Respuesta correcta: b

---
<br>

## Pregunta 13.
**¿Qué comando permite detener y eliminar los contenedores definidos en el archivo docker-compose.yml?**
- a) docker compose stop
- b) docker compose down
- c) docker compose rm
- d) docker compose kill

 Respuesta correcta: b

---
<br>

## Pregunta 14.
**En un archivo docker-compose.yml, ¿cómo se define el mapeo de puertos entre el host y el contenedor?**
- a) Mediante la clave ports: con el formato "puerto_contenedor:puerto_host"
- b) Mediante la clave ports: con el formato "puerto_host:puerto_contenedor"
- c) Con la clave port_mapping:
- d) Usando la opción -p en el YAML

 Respuesta correcta: b

---
<br>

## Pregunta 15.
**¿Qué indica el parámetro restart: always en la configuración de un servicio en Docker Compose?**
- a) Que el contenedor nunca se reiniciará
- b) Que el contenedor se reiniciará únicamente si ocurre un fallo en la aplicación
- c) Que el contenedor se reiniciará automáticamente si se detiene o se reinicia el host
- d) Que el contenedor se reiniciará cada cierto intervalo de tiempo

 Respuesta correcta: c

---
<br>

## Pregunta 16.
**Según la estructura de ficheros propuesta en el temario, ¿dónde se ubica el archivo docker-compose.yml?**
- a) Dentro de la carpeta /mysql
- b) En la raíz del proyecto (por ejemplo, /FacturaDespliegue)
- c) En la carpeta /java/build
- d) Dentro de /compilar/build

 Respuesta correcta: b

---
<br>

## Pregunta 17.
**En la imagen de Docker creada para compilar aplicaciones Java, ¿cuáles de las siguientes herramientas se incluyen?**
- a) Solo JDK y Maven
- b) JDK, Maven, NodeJS y sass
- c) Solo NodeJS y sass
- d) Maven y NodeJS únicamente

 Respuesta correcta: b

---
<br>

## Pregunta 18.
**En el Dockerfile de compilación, ¿qué instrucción se utiliza para establecer el directorio de trabajo donde se ejecutarán los comandos?**
- a) RUN cd /opt/app
- b) WORKDIR /opt/app
- c) ENV WORKDIR=/opt/app
- d) CMD cd /opt/app

 Respuesta correcta: b

---
<br>

## Pregunta 19.
**En el ejemplo final, ¿qué función cumple el comando: sudo docker image rm logongas/compilar:1.0.0?**
- a) Renombra la imagen
- b) Actualiza la imagen
- c) Elimina la imagen local especificada
- d) Muestra la información de la imagen

 Respuesta correcta: c

---
<br>

## Pregunta 20.
**Para ejecutar el contenedor de compilación y montar un volumen local en el directorio /opt/app del contenedor, ¿qué opción se utiliza en el comando docker container run?**
- a) -v ./volumes/app:/opt/app
- b) --mount ./volumes/app:/opt/app
- c) -m ./volumes/app:/opt/app
- d) -p ./volumes/app:/opt/app

 Respuesta correcta: a

---