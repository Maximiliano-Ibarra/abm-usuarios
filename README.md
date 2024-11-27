# ABM-Usuarios

**Arquitectura Web - Prof.: Fernando Corinaldesi - Alumnos: Ibarra, Maximiliano - Alejandro Salcedo**

**Proyecto**

La Empresa X es una compañía mediana dedicada a la fabricación y distribución de productos electrónicos. Con el fin de optimizar sus procesos internos, se ha decidido modernizar su infraestructura tecnológica mediante el desarrollo de diversas aplicaciones y servicios.
Este proyecto corresponde a la aplicación de ABM de Usuarios, donde se podrán crear, modificar, listar y eliminar usuarios. Además, implementa funciones de autenticación y autorización.

Este proyecto tiene el objetivo de crear una API REST en Node.js y Express, y un Frontend de una sola página (SPA) utilizando Vue.js. Además, la aplicación está integrada con una base de datos PostgreSQL para la persistencia de los datos.

**Tecnologías utilizadas**
Frontend: Vue.js
Backend: Node.js, Express.js
Base de datos: PostgreSQL

**Funcionalidad**

La aplicación incluye las siguientes funcionalidades principales:

 ○ Login / registro de usuario.
 ○ Crear, editar, eliminar y listar usuarios.
 ○ Asignación de roles.

**Rutas de la API**

POST /api/login: Login de usuario
POST /api/usuarios: Crear un nuevo usuario
GET /api/usuarios: Obtener todos los usuarios
GET /api/usuarios/:id: Obtener un usuario particular
PUT /api/usuarios/:id: Actualizar los datos de un usuario
DELETE /api/products/:id: Eliminar un usuario

**Instalación**

**Requisitos**

 ○ Node.js
 ○ PostgreSQL
 ○ Base de datos configurada para el proyecto

1) Clonar el repositorio desde https://github.com/Maximiliano-Ibarra/abm-usuarios.git
2) Instalar las dependencias correspondientes del backend: cd backend (sequelize, pg, cors, jsonwebtoken, bcrypt)
3) Configurar la conexión de base de datos desde ./Backend/config/connection.js
4) Ejecutar el servidor backend con node index.js, la aplicación iniciará en la siguiente URL: http://localhost:3000/api
5) Instalar las dependencias para el frontend: npm install
6) Ejecutar la aplicación frontend con npm run dev, la aplicación iniciará en la siguiente URL: http://localhost:5173/

**Base de datos**

Estructura de la base:

CREATE TABLE public.users (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    username character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(60) COLLATE pg_catalog."default" NOT NULL,
    email character varying(250) COLLATE pg_catalog."default" NOT NULL,
    role integer NOT NULL DEFAULT 1,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)