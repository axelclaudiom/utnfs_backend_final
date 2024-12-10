# API RESTful de Gestión de Artículos

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express**, y **MongoDB** para la gestión de artículos. Incluye operaciones CRUD completas, autenticación de usuarios mediante JWT, validación de datos, y seguridad básica.

## Características

- **Autenticación de usuarios**:
  - Registro de usuarios con contraseñas hasheadas.
  - Emisión de tokens JWT para proteger rutas.
- **Gestión de artículos**:
  - Operaciones CRUD: crear, leer (individual o lista completa), actualizar, y eliminar artículos.
- **Seguridad**:
  - Protección de rutas sensibles con JWT.
  - Uso de cabeceras de seguridad con Helmet.
- **Validación de datos**:
  - Validación básica de datos de entrada utilizando `express-validator`.
- **Documentación de la API**:
  - Documentada con Postman.

## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MongoDB](https://www.mongodb.com/) (o una conexión a MongoDB Atlas)
- [Postman](https://www.postman.com/) (opcional para probar la API)

## Configuración del proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo .env en la raíz del proyecto con las siguientes variables:
    ```bash
     PORT=5000
     MONGO_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_base>?retryWrites=true&w=majority
     JWT_SECRET=clave_secreta_super_segura
     ```

4. Inicia el servidor:
    - Modo desarrollo:
    ```bash
    npm run dev
    ```

    - Modo producción:
    ```bash
    npm start
    ```

## Endpoints de la API
- **Autenticación**
- `POST /api/auth/register`: Registra un nuevo usuario.
- `POST /api/auth/login`: Inicia sesión y devuelve un token JWT.
- **Artículos**
- `POST /api/articulos`: Crea un nuevo artículo.
- `GET /api/articulos`: Obtiene todos los artículos.
- `GET /api/articulos/:id`: Obtiene un artículo específico por su ID.
- `PUT /api/articulos/:id`: Actualiza un artículo por su ID.
- `DELETE /api/articulos/:id`: Elimina un artículo por su ID.
Nota: Las rutas de artículos requieren un token JWT válido en el encabezado de autorización.

## Pruebas con Postman
Puedes probar la API utilizando Postman. Importa la colección de Postman desde el siguiente enlace:
-  [Documentación de Postman](https://documenter.getpostman.com/view/39994610/2sAYHwHPXt#intro)

## Estructura del proyecto
    ```bash
    .
    ├── config/
    │   └── db.js               # Configuración de la conexión a MongoDB
    ├── middlewares/
    │   ├── authMiddleware.js   # Middleware de autenticación con JWT
    │   └── errorHandler.js     # Middleware para manejar errores
    ├── models/
    │   ├── Articulo.js         # Modelo de artículo
    │   └── User.js             # Modelo de usuario
    ├── routes/
    │   ├── authRoutes.js       # Rutas de autenticación
    │   └── articuloRoutes.js   # Rutas de artículos
    ├── .env                    # Variables de entorno
    ├── index.js                # Archivo principal del servidor
    ├── package.json            # Configuración del proyecto
    └── README.md               # Este archivo

    ```

## Tecnologías utilizadas
- **Backend**: Node.js, Express
- **Base de datos**: MongoDB (Atlas)
- **Autenticación**: JSON Web Tokens (JWT)
- **Seguridad**: Helmet