# 🧠 Apuntes React + Backend (API con Express)

Estos apuntes resumen **cómo conviven React y un backend en Express** en un mismo proyecto, sin conflictos de rutas.
Están pensados para proyectos **fullstack**.

---

## 1️⃣ Dos mundos en un mismo servidor

En un proyecto fullstack hay **dos responsabilidades distintas**:

### 🌍 Frontend (React)

* Renderiza la interfaz
* Gestiona la navegación (React Router)
* Hace peticiones al backend
* Se sirve como **archivos estáticos** (`dist/`)

### 🧠 Backend (Express)

* Define endpoints
* Accede a la base de datos
* Devuelve datos (JSON)
* No renderiza HTML

👉 La clave es **no mezclar responsabilidades**.

---

## 2️⃣ Regla de oro de las rutas

> 🔑 **Todas las rutas del backend deben empezar por `/api`**

Esto evita conflictos entre:

* Rutas del frontend (`/login`, `/profile/3`)
* Rutas del backend (`/api/users`, `/api/login`)

---

## 3️⃣ Qué rutas gestiona cada parte

### React (Frontend)

Ejemplos de rutas:

* `/`
* `/login`
* `/profile/3`

Estas rutas:

* No existen en el servidor
* Son gestionadas por **React Router**
* Siempre devuelven `index.html`

---

### Express (Backend / API)

Ejemplos de rutas:

* `/api/users`
* `/api/users/3`
* `/api/login`

Estas rutas:

* Devuelven JSON
* Ejecutan lógica de servidor
* Acceden a base de datos

---

## 4️⃣ Orden correcto del servidor Express

El orden del código en Express **es muy importante**:

```js
// 1️⃣ Middlewares
app.use(cors());

// 2️⃣ Endpoints de la API
app.get('/api/users', ...);
app.post('/api/login', ...);

// 3️⃣ Servir React (build)
app.use(express.static(reactDistPath));

// 4️⃣ Catch-all para React Router
app.use((req, res) => {
  res.sendFile(path.join(reactDistPath, 'index.html'));
});
```

📌 Si el catch-all se pone antes, **rompe la API**.

---

## 5️⃣ Qué hace el catch-all de React

El catch-all:

```js
app.use((req, res) => {
  res.sendFile('index.html');
});
```

Sirve para:

* Cualquier ruta que no sea `/api`
* Cualquier ruta que no sea un archivo real

Ejemplos:

* `/profile/3` → index.html
* `/settings` → index.html

Después React Router decide qué componente mostrar.

---

## 6️⃣ Cómo React llama al backend

Desde React se hacen peticiones con `fetch`:

```js
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

✔ No se pone `localhost`
✔ Funciona en desarrollo y producción
✔ Express responde

---

## 7️⃣ Qué NO debe hacer React

React **NO debe**:

* Acceder directamente a la base de datos
* Tener lógica de servidor
* Devolver HTML desde Express

---

## 8️⃣ Qué NO debe hacer Express

Express **NO debe**:

* Gestionar rutas de React (`/login`, `/profile`)
* Devolver HTML dinámico en SPA
* Interferir con React Router

---

## 9️⃣ Flujo completo de una petición

### Ejemplo 1: navegación React

```
GET /profile/3
```

1. Express no encuentra endpoint
2. No es archivo estático
3. Catch-all devuelve index.html
4. React Router renderiza Profile

---

### Ejemplo 2: llamada a la API

```
GET /api/users
```

1. Express encuentra el endpoint
2. Consulta la base de datos
3. Devuelve JSON
4. React consume los datos

---

## 🔟 Ventajas de esta arquitectura

* Frontend y backend desacoplados
* React Router funciona sin hacks
* API clara y mantenible
* Fácil de desplegar

---

## 🧠 Idea final para recordar

> React pinta pantallas.
> Express sirve datos.
> `/api` separa ambos mundos.

Esta separación es la base de cualquier proyecto fullstack moderno.
