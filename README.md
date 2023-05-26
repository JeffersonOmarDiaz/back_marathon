# back_marathon
Este backend esta realizado con nodeJs

### Resultados con postman
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/69750e45-4238-431f-be17-522ed5221723)

#### lista de empresas
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/d89ef88d-3e0a-4921-bef7-4eae478945ff)

#### Creacion de empresa
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/7259cc14-2587-4c9e-9398-d4af6057e00c)

#### Edición de empresa
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/23396807-132d-4a2b-97cb-d9a9df01ce3e)
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/4759cc94-4725-4c6c-ad94-f4ff083634e7)

#### Lista de empleados
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/132c1c6b-6e25-42f4-9f91-3d83b3072081)

#### Creación empleados
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/e19ea685-423f-4da0-816b-8a382d545c01)

#### Edición de empleados
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/21d0ae90-9a9e-4870-afd8-ae288c34e771)
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/e9f80e62-df6b-4f8e-a9fa-5354f533fbe7)

#### Lista de Departamentos
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/2a965d98-8954-418f-825c-786dbf9e5fbe)

#### Creación departamentos
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/776352d9-e6c1-4109-9fd7-cab05ee95812)
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/3e5c9e4c-c14e-4a5b-9986-a85986f3a12b)

#### Edkición departamentos
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/7ecb4c18-80bd-4363-9511-4b9b39ad137e)
![image](https://github.com/JeffersonOmarDiaz/back_marathon/assets/32933851/fed5cb32-94bc-4163-8988-7e71c4ec98cd)



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

| node app.js |
| ----------- |
  
