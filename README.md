# back_marathon
Este backend esta realizado con node js

### Guia para poner en producción (HEROKU)
- Clonar el repositorio e instalar las dependencias 
| npm install |
| ----------- |

- Actualizar los valores los parametros del archivo .env dependiendo la configuracion de la base de datos

 Variables   | Valor
------------- | ---------------------
 HOST       | 182.*.*.36           
 DATABASE   | nombreBaseDatos
 USER       | Usuario roor
 PASSWORD   | *********
 
- crear el archivo profile el el proyecto
- Configurar las dependencias del servidor
- Dirijirse a la carpeta del proyecto y ejecutar el comando 
  npm install --production 
- Instalar las dependencias necesarias tomado como referencia el alchivo [package.json](https://github.com/JeffersonOmarDiaz/back_marathon/blob/main/package.json)  
- ejecutar el comando 
  node app.js
