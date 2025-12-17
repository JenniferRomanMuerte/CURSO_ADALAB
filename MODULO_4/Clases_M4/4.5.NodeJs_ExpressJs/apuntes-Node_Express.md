# 🧠 Apuntes de Node.js y Express

Estos apuntes están escritos como resumen personal, con ideas clave y sin exceso de teoría.

---

## 1️⃣ ¿Qué es Node.js?

* **Node.js NO es un lenguaje nuevo**.
* Es **JavaScript ejecutándose en la terminal**, fuera del navegador.
* Permite hacer cosas que en el navegador no se pueden:

  * Leer y escribir archivos
  * Abrir puertos
  * Crear servidores

📌 En Node **solo se ejecuta JavaScript**, no HTML ni CSS.

---

## 2️⃣ JavaScript en navegador vs Node

### JavaScript en navegador

* Hay interfaz gráfica
* Hay eventos (click, scroll, input…)
* No se puede acceder al sistema de archivos

### JavaScript en Node

* No hay interfaz gráfica
* No hay eventos de usuaria
* Sí puede acceder a archivos, red y sistema

👉 Es el mismo JavaScript, cambia el entorno.

---

## 3️⃣ ¿Qué es un módulo?

Un módulo es **un archivo de JavaScript reutilizable**.

Sirve para:

* Organizar el código
* Separar responsabilidades
* Reutilizar lógica
* Evitar repetir código

---

## 4️⃣ Importar y exportar módulos en Node

Node usa la sintaxis clásica (CommonJS).

### Exportar

```js
module.exports = algo;
```

### Importar

```js
const algo = require('./ruta');
```

📌 Es equivalente a `export` / `import` de React, pero con otra sintaxis.

---

## 5️⃣ Tipos de módulos

### 1. Módulos propios

Archivos creados por nosotras dentro del proyecto.

```js
const math = require('./math');
```

---

### 2. Módulos nativos de Node

Vienen incluidos con Node.js.

```js
const fs = require('fs');
const path = require('path');
```

Ejemplos:

* `fs`: sistema de archivos
* `path`: gestión de rutas
* `http`: servidores HTTP

---

### 3. Módulos instalados con NPM

Se instalan desde NPM.

```bash
npm install lodash
```

Luego se usan así:

```js
const _ = require('lodash');
```

---

### 4. Módulos JSON

Archivos de datos.

```js
const data = require('./data.json');
```

---

## 6️⃣ ¿Qué es NPM?

* Es el **gestor de paquetes de Node**.
* Permite instalar librerías externas.

El archivo **package.json**:

* Describe el proyecto
* Lista las dependencias
* Guarda scripts de arranque

Crear proyecto:

```bash
npm init
```

---

## 7️⃣ ¿Qué es Express?

Express es un **módulo de NPM** que facilita crear servidores.

👉 Evita tener que programar un servidor desde cero.

Instalación:

```bash
npm install express
```

---

## 8️⃣ ¿Qué es un servidor?

Un servidor es un programa que:

1. Escucha peticiones
2. Procesa datos
3. Devuelve respuestas

---

## 9️⃣ Servidor Express mínimo

```js
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Servidor arrancado');
});
```

---

## 🔟 Endpoints

Un endpoint se define así:

```js
app.get('/users', (req, res) => {
  res.send('Hola');
});
```

📌 Endpoint = **verbo HTTP + ruta**

Ejemplos:

* GET /users
* POST /login

---

## 1️⃣1️⃣ req y res

* `req`: información que llega (petición)
* `res`: respuesta que enviamos

⚠️ Regla importante:

> Cada petición debe tener **una única respuesta**

---

## 1️⃣2️⃣ CORS

CORS es una política de seguridad del navegador.

Permite o bloquea peticiones entre dominios distintos.

Solución común:

```js
const cors = require('cors');
app.use(cors());
```

---

## 1️⃣3️⃣ Servidor de archivos estáticos

Sirve archivos sin modificarlos (HTML, CSS, JS, imágenes…).

```js
app.use(express.static('./public'));
```

Comportamiento:

* `/` → `public/index.html`
* `/contact.html` → `public/contact.html`

---

## 1️⃣4️⃣ __dirname y path

* `__dirname`: ruta del archivo actual
* `path.join()`: une rutas de forma segura

Se usan para evitar errores de rutas.

---

## 1️⃣5️⃣ Error 404

Si:

* No existe archivo estático
* No existe endpoint

Se devuelve un 404.

Debe ir **siempre al final**:

```js
app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});
```

---

## 1️⃣6️⃣ Estructura típica de un proyecto

```
project
├─ src
│  └─ index.js
├─ public
│  └─ index.html
├─ package.json
```

---

## 1️⃣7️⃣ Flujo mental de un servidor Express

1. Importar módulos
2. Crear servidor
3. Configurar middlewares
4. Crear endpoints
5. Servir archivos estáticos
6. Gestionar errores (404)

---


