# Proyecto Fullstack Básico con Django, Next.js y MySQL

Este proyecto es una solución fullstack que utiliza **Django** para el backend y **Next.js** para el frontend. Django se encarga de la lógica del servidor, las APIs y la conexión a la base de datos, mientras que Next.js maneja la interfaz de usuario y las rutas del lado del cliente.

## 🛠 Requisitos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (para Next.js)
- [Python](https://www.python.org/) (para Django)
- [Pip](https://pip.pypa.io/) (para gestionar paquetes de Python)
- [MySQL](https://www.mysql.com/) (para la base de datos)

---

## 📋 Objetivo del Proyecto

**Caso de uso práctico:**

Desarrollar una aplicación completa que incluya:

1. **Conexión a una API pública o privada.**
2. **Almacenamiento de datos** en una base de datos MySQL.
3. **Frontend interactivo** que permita visualizar e interactuar con los datos.
4. **Repositorio en GitHub** con el código del proyecto.

El enfoque está en la correcta integración entre componentes, claridad del código y funcionalidad general.

---

## 🚀 Requisitos del Proyecto

### 1. Conexión a la API
- Selecciona una API pública (ej: OpenWeatherMap, TheMovieDB, etc.).
- Consume al menos 50 registros desde la API.

### 2. Base de datos
- Diseña una base de datos en **MySQL** para almacenar los datos.
- Incluye al menos **dos tablas relacionadas**.
- Crea un script para inicializar y poblar la base de datos.

### 3. Frontend interactivo
- Crea una interfaz que permita:
  - Visualizar los datos almacenados.
  - Filtrar, buscar y ordenar los registros.
  - (Opcional) Agregar o actualizar registros desde el frontend.
- Usa React, Vue, Angular, o HTML/CSS/JS puro.

### 4. Backend
- Desarrolla una API que sirva como intermediario entre el frontend y la base de datos.
- (Opcional) Implementa autenticación básica.
- Puedes usar el stack de tu elección: Django, Flask, Laravel, Express, etc.

---

## ⚙️ Instalación

### **Backend (Django)**

1. Clona este repositorio:

```
   git clone <URL_DEL_REPOSITORIO>
```

2    Crea y activa un entorno virtual:

```
    python -m venv venv
    source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3    Navega al directorio backend_prueba_tenica/:

```
    cd backend_prueba_tenica/
```

4    Instala las dependencias de Python:

```
    pip install -r requirements.txt
```
5    Crea un archivo .env en el directorio backend_prueba_tenica/ con las siguientes variables de configuración para la base de datos:

```
    DATABASE_NAME=prueba_tecnica
    DATABASE_USER=root
    DATABASE_PASSWORD=1234
    DATABASE_HOST=localhost
    DATABASE_PORT=3306
```

6    Asegúrate de que Django lea el archivo .env utilizando python-dotenv. Si no lo tienes instalado, agrégalo a las dependencias con:

```
    pip install python-dotenv
```

7    Crea la BDD como nombre prueba_tecnica!!!

8    Crea las tablas de la base de datos (si aún no lo has hecho):

```
    python manage.py makemigrations
    python manage.py migrate
```

### **Frontend (Next.js)**

1    Navega al directorio frontend_prueba_tenica/:

```
    cd frontend_prueba_tenica/
```

2    Instala las dependencias de Node.js:

```
    npm install
```

3   Inicia el servidor de desarrollo:

```
      npm run dev
```



