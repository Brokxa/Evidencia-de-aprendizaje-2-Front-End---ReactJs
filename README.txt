# Proyecto API REST - Películas y Series

Este proyecto es una API REST desarrollada con Node.js, Express y Sequelize que gestiona información de Películas, Series, Géneros, Directores, Productoras y Tipos.  
La base de datos utilizada es SQLite, lo que permite trabajar sin necesidad de instalar un servidor de base de datos externo.  

## Tecnologías utilizadas
- Node.js → entorno de ejecución de JavaScript.   
- Sequelize → ORM para manejar la base de datos.  
- SQLite → base de datos ligera, basada en archivo.  
- Postman → cliente para probar la API.  

## Instalación y configuración
1. Clonar el repositorio desde GitHub:  
   ```Terminal
   git clone <url-del-repo>
   ```
2. Instalar las dependencias:  
   ```Terminal
   npm install
   ```
3. Configurar las variables de entorno:   
   - En este caso el archivo .env ya viene configurado para usar SQLite, así que no necesitas modificar nada.

4. Iniciar el servidor:  
   ```Terminal
   npm run dev
   ```
   El servidor estará corriendo en:  
   ```
   http://localhost:3000
   ```

5. Ejecutar el seed para poblar la base de datos con ejemplos realistas:  
   ```Terminal
   npm run seed
   ```