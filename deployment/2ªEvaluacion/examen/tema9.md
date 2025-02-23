# TEMA 9

## Pregunta 1.
**¿Qué se entiende por despliegue continuo según el temario?**
- a) Un proceso manual de actualización de aplicaciones
- b) Desplegar las aplicaciones web lo más pronto posible
- c) Realizar despliegues únicamente cuando se completan todas las pruebas
- d) Esperar a tener un release completo para hacer el despliegue

 Respuesta correcta: b

---
<br>

## Pregunta 2.
**¿Cuáles son las dos herramientas comentadas en el temario para lograr despliegue continuo?**
- a) Jenkins y GitLab CI
- b) Travis CI y CircleCI
- c) Jenkins y GitHub Actions
- d) Bamboo y TeamCity

 Respuesta correcta: c

---
<br>

## Pregunta 3.
**¿Qué es Jenkins según la información proporcionada?**
- a) Un sistema operativo para servidores
- b) Un "Servidor de automatización" utilizado para CI/CD
- c) Una herramienta exclusiva para gestión de contenedores
- d) Un repositorio de código fuente

 Respuesta correcta: b

---
<br>

## Pregunta 4.
**¿Qué son GitHub Actions?**
- a) Acciones que se ejecutan en respuesta a cambios en el repositorio y que pueden ser configuradas para tareas de CI/CD
- b) Un servicio para alojar imágenes Docker
- c) Un sistema de control de versiones
- d) Un método manual para desplegar aplicaciones

 Respuesta correcta: a

---
<br>

## Pregunta 5.
**En el ejemplo del archivo .github/workflows/desplegar.yml, ¿cuándo se dispara el workflow?**
- a) Únicamente cuando se hace un push en cualquier rama
- b) Solo enrespuesta a una ejecución
- c) En cada push a la rama master y también manualmente mediante workflow_dispatch
- d) Cada vez que se crea un tag

 Respuesta correcta: c

---
<br>

## Pregunta 6.
**¿Qué acción realiza el paso “Checkout repo” en el workflow?**
- a) Instala dependencias del sistema
- b) Descarga el código fuente del repositorio
- c) Configura la conexión VPN
- d) Ejecuta pruebas unitarias

 Respuesta correcta: b

---
<br>

## Pregunta 7.
**En el paso "Configurar la VPN", ¿qué herramientas se instalan con apt-get?**
- a) git y ssh
- b) docker y docker-compose
- c) openvpn y openvpn-systemd-resolved
- d) Jenkins y Maven

 Respuesta correcta: c

---
<br>

## Pregunta 8.
**¿Qué función cumple el comando: echo "${{ secrets.VPN_CA }}" | base64 --decode > ca.crt?**
- a) Codifica la variable secreta VPN_CA
- b) Decodifica la variable secreta VPN_CA y la guarda en el archivo ca.crt
- c) Elimina la clave VPN
- d) Muestra la versión de la VPN

 Respuesta correcta: b

---
<br>

## Pregunta 9.
**¿Qué se configura mediante las órdenes sed -i "s/REPLACE_VPN_IP/${{ secrets.VPN_IP }}/" y su equivalente para VPN_PORT?**
- a) Se actualiza el archivo de configuración de la VPN reemplazando placeholders por valores reales
- b) Se instalan nuevas versiones de openvpn
- c) Se eliminan las configuraciones antiguas de la VPN
- d) Se generan claves públicas y privadas

 Respuesta correcta: a

---
<br>

## Pregunta 10.
**¿Qué comando se utiliza para iniciar la conexión VPN en el workflow?**
- a) sudo docker run vpn-pve.conf
- b) sudo openvpn --config vpn-pve.conf --daemon --log openvpn.log
- c) sudo ssh vpn-pve.conf
- d) sudo systemctl start openvpn

 Respuesta correcta: b

---
<br>

## Pregunta 11.
**¿Qué hace la instrucción sleep 10 en el workflow?**
- a) Detiene el contenedor por 10 minutos
- b) Espera 10 segundos para que la VPN se establezca correctamente
- c) Descarga 10 actualizaciones
- d) Ejecuta pruebas de conexión durante 10 segundos

 Respuesta correcta: b

---
<br>

## Pregunta 12.
**¿Cómo se prueba la conexión a la VPN en el workflow?**
- a) Con el comando sudo cat openvpn.log y mediante un ping -c 2 192.168.59.104
- b) Con el comando docker ps
- c) Mediante la ejecución de git clone
- d) Usando curl a la URL del servidor

 Respuesta correcta: a

---
<br>

## Pregunta 13.
**¿Qué acción se realiza primero en el paso “Run remote script”?**
- a) Clonar el repositorio en el servidor remoto
- b) Cambiar permisos del directorio clonado
- c) Eliminar el directorio DesplegarFacturasDocker existente en el servidor remoto
- d) Ejecutar el script de despliegue en el servidor

 Respuesta correcta: c

---
<br>

## Pregunta 14.
**¿Qué se hace con la clave privada SSH en el workflow antes de usarla para conectarse al servidor remoto?**
- a) Se elimina inmediatamente
- b) Se guarda en el archivo ./id_rsa y se asignan permisos 600
- c) Se imprime en la consola
- d) Se utiliza para generar un token de acceso

 Respuesta correcta: b

---
<br>

## Pregunta 15.
**¿Qué variable de entorno se utiliza para acceder a la clave privada en el workflow de GitHub Actions?**
- a) SERVER_KEY
- b) SSH_PRIVATE_KEY
- c) PRIVATE_SSH
- d) GITHUB_SSH_KEY

 Respuesta correcta: b

---
<br>

## Pregunta 16.
**¿Qué indica la instrucción workflow_dispatch: en el archivo de GitHub Actions?**
- a) Que el workflow se ejecuta únicamente en horarios programados
- b) Que el workflow se puede iniciar manualmente
- c) Que el workflow se ejecuta cada vez que se hace un commit
- d) Que el workflow se ejecuta solo en la rama develop

 Respuesta correcta: b

---
<br>

## Pregunta 17.
**¿Cuál es la finalidad principal de utilizar herramientas como Jenkins y GitHub Actions según el temario?**
- a) Automatizar tareas de desarrollo, integración y despliegue continuo
- b) Crear repositorios de código
- c) Administrar bases de datos
- d) Reemplazar completamente a Docker

 Respuesta correcta: a

---
<br>

## Pregunta 18.
**¿Por qué se utiliza el parámetro -o StrictHostKeyChecking=no en los comandos SSH del workflow?**
- a) Para aumentar la seguridad de la conexión SSH
- b) Para evitar que SSH solicite confirmación al conectar por primera vez al servidor remoto
- c) Para cambiar el puerto de conexión
- d) Para ejecutar comandos en modo interactivo

 Respuesta correcta: b

---
<br>

## Pregunta 19.
**¿Qué comando se utiliza para clonar el repositorio remoto en el servidor durante el workflow?**
- a) sudo git clone https://github.com/lgonzalezmislata/DesplegarFacturasDocker.git
- b) sudo docker pull DesplegarFacturasDocker
- c) sudo ssh clone https://github.com/lgonzalezmislata/DesplegarFacturasDocker.git
- d) sudo wget https://github.com/lgonzalezmislata/DesplegarFacturasDocker.git

 Respuesta correcta: a

---
<br>

## Pregunta 20.
**Según el temario, ¿cuál es el objetivo del despliegue continuo?**
- a) Realizar despliegues manuales en horarios establecidos
- b) Automatizar la integración y el despliegue para actualizar aplicaciones lo antes posible
- c) Ejecutar tareas de mantenimiento sin interacción humana
- d) Esperar a que el equipo de QA apruebe cada cambio antes del despliegue

 Respuesta correcta: b

---