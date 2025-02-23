# TEMA 3

## Pregunta 1.
**¿Cuál es la principal ventaja de automatizar el despliegue de una aplicación?**
- a) Incrementa la complejidad del proceso
- b) Minimiza errores y permite despliegues frecuentes
- c) Hace que el despliegue sea manual
- d) Aumenta el tiempo de despliegue

 Respuesta correcta: b

---
<br>

## Pregunta 2.
**En la literatura informática, ¿a qué se denomina “Continuous delivery”?**
- a) Desplegar la aplicación únicamente de forma manual
- b) Desplegar la aplicación en producción solo una vez
- c) Desplegar la aplicación cada vez que se corrige un error o se añade una funcionalidad
- d) Desplegar la aplicación sin realizar pruebas previas

 Respuesta correcta: c

---
<br>

## Pregunta 3.
**Según el temario, ¿cuál es la carpeta más importante para el módulo de despliegue?**
- a) /src
- b) /docs
- c) /target
- d) /disenyo

 Respuesta correcta: c

---
<br>

## Pregunta 4.
**¿Qué función tiene la carpeta /scripts dentro de la estructura del proyecto?**
- a) Contiene la documentación de la aplicación
- b) Almacena el código fuente de la aplicación
- c) Guarda scripts varios, normalmente relacionados con el despliegue
- d) Contiene imágenes de diseño

 Respuesta correcta: c

---
<br>

## Pregunta 5.
**¿Cuál de las siguientes tareas NO se menciona como transformación que se realiza en la carpeta target?**
- a) Compilar el código Java
- b) Transpilar código TypeScript a JavaScript
- c) Ofuscar el código
- d) Ejecutar pruebas unitarias

 Respuesta correcta: d

---
<br>

## Pregunta 6.
**¿Qué comando se utiliza para transpilar SASS a CSS según el temario?**
- a) tsc --outDir ./js ./ts/*.ts
- b) sass ./scss/main.scss ./css/main.css
- c) npm install sass -g
- d) mvn clean install

 Respuesta correcta: b

---
<br>

## Pregunta 7.
**¿Qué comando se emplea para transpilar TypeScript a JavaScript?**
- a) tsc --outDir ./js ./ts/*.ts
- b) sass ./scss/main.scss ./css/main.css
- c) npm run compile-scss
- d) mvn clean install

 Respuesta correcta: a

---
<br>

## Pregunta 8.
**En el script para generar HTML a partir del log de Git, ¿qué herramienta se usa para filtrar las líneas que contienen un issue?**
- a) sed
- b) awk
- c) grep
- d) cat

 Respuesta correcta: c

---
<br>

## Pregunta 9.
**Dentro de la estructura de carpetas del proyecto, ¿cuál de los siguientes archivos o carpetas NO se contempla?**
- a) /mi-proyecto/package.json
- b) /mi-proyecto/target
- c) /mi-proyecto/build.xml
- d) /mi-proyecto/node_modules

 Respuesta correcta: c

---
<br>

## Pregunta 10.
**¿Cómo se ejecuta un script definido en el package.json?**
- a) npm start
- b) npm run nombre-tarea
- c) mvn install
- d) bash nombre_script.sh

 Respuesta correcta: b

---
<br>

## Pregunta 11.
**¿Qué plugin de Maven se menciona para llamar a scripts de npm?**
- a) exec-maven-plugin
- b) maven-compiler-plugin
- c) maven-deploy-plugin
- d) maven-install-plugin

 Respuesta correcta: a

---
<br>

## Pregunta 12.
**Según el temario, ¿cuál es la sintaxis correcta para copiar un fichero a un servidor remoto usando scp?**
- a) scp /mi_carpeta_local/mi_fichero mi_usuario_remoto@ip_remota:/mi_carpeta_remota
- b) ssh /mi_carpeta_local/mi_fichero mi_usuario_remoto@ip_remota:/mi_carpeta_remota
- c) cp /mi_carpeta_local/mi_fichero mi_usuario_remoto@ip_remota:/mi_carpeta_remota
- d) mv /mi_carpeta_local/mi_fichero mi_usuario_remoto@ip_remota:/mi_carpeta_remota

 Respuesta correcta: a

---
<br>

## Pregunta 13.
**¿Qué indica el parámetro -i en los comandos ssh y scp?**
- a) Especifica el directorio remoto
- b) Indica el fichero de clave privada (identidad) a usar
- c) Aumenta la verbosidad de la conexión
- d) Define el puerto de conexión

 Respuesta correcta: b

---
<br>

## Pregunta 14.
**En un script de Bash, ¿cómo se hace referencia al primer parámetro pasado al script?**
- a) $0
- b) $1
- c) $#
- d) $*

 Respuesta correcta: b

---
<br>

## Pregunta 15.
**¿Cuál de las siguientes opciones NO es un método para cargar variables de entorno en un script Bash?**
- a) source config.env
- b) export VARIABLE=valor
- c) cp config.env /etc/env
- d) Definir variables externamente y luego usarlas

 Respuesta correcta: c

---
<br>

## Pregunta 16.
**¿Qué efecto tiene el comando chmod 600 id_rsa.pub según se explica en el temario?**
- a) Concede permisos completos a todos los usuarios
- b) Establece permisos para que solo el usuario propietario pueda leer y escribir
- c) Hace el fichero ejecutable
- d) Elimina el fichero

 Respuesta correcta: b

---
<br>

## Pregunta 17.
**¿Cuál es la forma correcta de definir una variable en Bash?**
- a) USER_NAME: logongas
- b) USER_NAME=logongas
- c) set USER_NAME = "logongas"
- d) var USER_NAME = logongas

 Respuesta correcta: b

---
<br>

## Pregunta 18.
**¿Qué opción se utiliza para indicar el puerto en el que se ejecutará una aplicación Spring al iniciar el jar?**
- a) -jar
- b) -Dserver.port=
- c) -port
- d) -Pserver

 Respuesta correcta: b

---
<br>

## Pregunta 19.
**En el despliegue en distintos entornos (pruebas, preproducción, producción), ¿cómo se pasa el fichero de configuración al script deploy.sh?**
- a) Se pasa como parámetro en la línea de comandos (por ejemplo, ./deploy.sh pruebas.env)
- b) Se codifica de forma fija dentro del script
- c) Se almacena en el package.json
- d) Se carga automáticamente desde una ubicación predeterminada

 Respuesta correcta: a

---
<br>

## Pregunta 20.
**¿Cuál es uno de los beneficios de utilizar scripts de npm para tareas de despliegue?**
- a) Permite ver todas las tareas de despliegue en el package.json
- b) Elimina la necesidad de utilizar scripts en Bash
- c) Ejecuta los scripts en paralelo sin configuración adicional
- d) Sustituye completamente a Maven

 Respuesta correcta: a

---