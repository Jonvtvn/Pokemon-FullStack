# Proyecto Django y Next.js

Este proyecto utiliza **Django** para el backend y **Next.js** para el frontend. Django maneja la lógica del servidor, las APIs y la base de datos, mientras que Next.js se encarga de la interfaz de usuario y las rutas del lado del cliente.

## 🛠 Requisitos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (para Next.js)
- [Python](https://www.python.org/) (para Django)
- [Pip](https://pip.pypa.io/) (para gestionar paquetes de Python)
- [MySQL](https://www.mysql.com/) (para la base de datos)

---

## 📋 Objetivo del Proyecto

**Caso de uso alternativo:**

Desarrolla una solución completa que incluya:

1. **Conexión a una API** (pública o privada).
2. **Almacenamiento de datos** en una base de datos MySQL.
3. **Frontend interactivo** que permita visualizar e interactuar con los datos obtenidos.
4. **Repositorio en GitHub** con la solución del desafío.

El enfoque principal está en la correcta integración de todos los componentes, la claridad del código y la calidad de la solución.

---

## 🚀 Requisitos del Proyecto

### 1. Conexión a la API
- Selecciona una API pública (por ejemplo, OpenWeatherMap, TheMovieDB, o una de tu elección).
- Consume datos relevantes desde la API (al menos 50 registros).

### 2. Base de datos
- Diseña una base de datos en **MySQL** para almacenar los datos obtenidos.
- Incluye al menos **dos tablas relacionadas**.
- Implementa un script para inicializar y poblar la base de datos con los datos de la API.

### 3. Frontend interactivo
- Construye una interfaz que permita:
  - Visualizar los datos almacenados en la base de datos.
  - Filtrar, buscar y ordenar los datos.
  - Opcionalmente, agregar o actualizar registros directamente desde el frontend.
- Usa un framework o librería de tu elección (React, Vue.js, Angular, o desarrollo nativo con HTML, CSS y JavaScript).

### 4. Backend
- Desarrolla una API o servicio que sirva como intermediario entre el frontend y la base de datos.
- Opcionalmente, incluye autenticación básica para proteger el acceso al backend.
- Puedes usar el lenguaje y framework de tu preferencia (Python con Flask/Django, PHP con Laravel, Node.js con Express, etc.).

---

## ⚙️ Instalación

### **Backend (Django)**

1. Clona este repositorio:

   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2   Navega al directorio backend/:
```
    cd backend/
```
3   Crea y activa un entorno virtual:
```
    python -m venv venv
    source venv/bin/activate  # En Windows: venv\Scripts\activate
```
4  Instala las dependencias de Python:
```
    pip install -r requirements.txt
    ```
5    Crea un archivo .env en el directorio backend/ con las siguientes variables de configuración para la base de datos:
```
    DATABASE_NAME=prueba_tecnica
    DATABASE_USER=root
    DATABASE_PASSWORD=1234
    DATABASE_HOST=localhost
    DATABASE_PORT=3306
```
6  Asegúrate de que Django lea el archivo .env utilizando python-dotenv. Si no lo tienes instalado, agrégalo a las dependencias con:
```
    pip install python-dotenv
```
8   Crea la BDD como nombre prueba_tecnica!!!

9   Crea las tablas de la base de datos (si aún no lo has hecho):
```
    python manage.py makemigrations
    python manage.py migrate
```

Frontend (Next.js)
1    Navega al directorio frontend/:
```
    cd frontend/
```
2    Instala las dependencias de Node.js:
```
    npm install
```
3   Inicia el servidor de desarrollo:
```
      npm run dev
```



