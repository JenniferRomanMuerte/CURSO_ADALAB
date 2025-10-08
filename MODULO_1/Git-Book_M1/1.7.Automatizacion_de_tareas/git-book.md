1.7 Automatización de tareas
En esta sesión usaremos herramientas para automatización de tareas en nuestro flujo de trabajo en front-end. Estas herramientas son muy útiles porque nos ayudan a ser más eficientes en nuestro trabajo, nos ahorran tareas repetitivas y nos impiden equivocarnos.

Nota: antes de comenzar a trabajar en esta lección debes haber realizado los pasos de la guía de instalación de Node JS.

¿En qué casos se utiliza?
En nuestro flujo de trabajo realizamos algunas tareas repetitivas. Por ejemplo, convertir el Sass en CSS. Sass es una tecnología que veremos en la próxima sesión donde escribimos el código en un lenguaje que luego se convierte en CSS.

Otra tarea habitual que se suele hacer es optimizar los ficheros CSS y JavaScript antes de subir la web al servidor o servidor de producción (a GitHub Pages en nuestro caso). Esta optimización se realiza para que el navegador pueda cargar y ejecutar los archivos más rápido y mostrar la página con más rapidez.

Con una herramienta como Vite, vamos a poder hacer que nuestro código Sass se convierta en CSS al guardar el fichero y ejecutar una tarea para que nos guarde el CSS / JS con código optimizado que más tarde subiremos a nuestro servidor (de nuevo, GitHub Pages en nuestro caso).

# Node JS

## Node JS y NPM

**Node JS** es un sistema para ejecutar **JavaScript en la terminal**, lo que nos permite crear un servidor web programado en JavaScript.
Esto quiere decir que cuando termines el curso de Adalab ya sabrás programar en JavaScript y podrás empezar a hacer tus pinitos en un lenguaje de back.

---

## 🧩 NPM

**NPM** es un gestor de paquetes y dependencias.
Pocas veces programamos el 100% del código de nuestra página web: siempre usamos paquetes de código desarrollados por otras personas.

En el siguiente vídeo vemos una pequeña introducción a estas dos herramientas.
No es momento de aprenderlas a fondo, solo queremos que entendáis a alto nivel qué son y cómo funcionan:

🎥 **Vídeo:** [Node JS y NPM - Adalab](https://youtu.be/6TdLfVEzvhk)

---

### Los comandos usados en el vídeo son:

```bash
npm install
npm start
```

---

## ⚡ Vite

**Vite** es una herramienta para desarrollar aplicaciones con JavaScript.
Aunque todavía no hayamos empezado el módulo de programación, esta herramienta nos acompañará el resto del bootcamp.

Sirve para **lanzar un servidor local** en la carpeta de un proyecto, de forma que los ficheros (HTML, CSS, JS, imágenes, fuentes...) puedan estar organizados correctamente.

Además, también nos permite **generar una versión “lista para producción”**, lo que significa que copia y empaqueta los ficheros en una carpeta que podemos subir a Internet.
A esta tarea se le llama **build**, y al subirlos al servidor hacemos un **deploy** o **despliegue**.

Vite además puede ampliarse con **plugins**, lo que permite automatizar tareas como:

- Soporte para **pre-procesadores** de estilos (Sass, PostCSS) para escribir CSS más claro.
- Posibilidad de **dividir el código** en varios ficheros.
- **Optimizar recursos** (reducir imágenes, cargar solo el JS necesario, etc.).

---

# 🎬 Resumen del vídeo “Node JS y NPM” (Adalab)

## 🌍 ¿Qué es Node.js?

- **Node.js** es un entorno que permite ejecutar **JavaScript fuera del navegador**.
- Funciona gracias al **motor V8** (el mismo que usa Google Chrome).
- Permite usar JavaScript para tareas del **lado del servidor** o automatización en front-end.

👉 En resumen: **Node convierte tu ordenador en un entorno capaz de entender y ejecutar JS** sin navegador.

---

## 📦 ¿Qué es NPM?

- **NPM** significa **Node Package Manager**.
- Es el **gestor de paquetes** que se instala junto con Node.js.
- Permite:
  - Instalar librerías o frameworks (React, Vite, Sass…).
  - Compartir tu propio código.
  - Automatizar tareas del proyecto.

🔹 En la práctica, NPM es como la “Play Store” de los proyectos JavaScript.

---

## ⚙️ ¿Qué es el archivo `package.json`?

- Archivo **JSON** creado al iniciar un proyecto con NPM.
- Contiene:
  - Nombre, versión, descripción.
  - Dependencias (librerías instaladas).
  - Scripts personalizados.

Se genera con:
```bash
npm init
```

---

## 📁 Estructura básica de `package.json`

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "react": "^18.0.0"
  }
}
```

### Explicación:
- `"scripts"` → comandos que puedes ejecutar con `npm run`.
- `"dependencies"` → librerías necesarias para el proyecto.
- `"devDependencies"` → librerías usadas solo en desarrollo.

---

## 🧠 Comandos esenciales de NPM

| Comando | Descripción |
|----------|-------------|
| `npm init` | Crea el archivo `package.json`. |
| `npm install <paquete>` | Instala un paquete. |
| `npm install` | Instala todas las dependencias del proyecto. |
| `npm start` | Ejecuta el script `"start"`. |
| `npm run <script>` | Ejecuta cualquier script definido. |
| `npm uninstall <paquete>` | Desinstala un paquete. |

---

## 📚 Archivos importantes

| Archivo | Descripción |
|----------|-------------|
| `package.json` | Configuración general del proyecto. |
| `package-lock.json` | Versiones exactas de las dependencias. |
| `node_modules/` | Carpeta donde se guardan las librerías instaladas. |

⚠️ `node_modules` **no se sube a GitHub**; solo el `package.json`.

---

## 🧰 Flujo de trabajo con NPM

1. Inicializar el proyecto:
   ```bash
   npm init -y
   ```
2. Instalar dependencias:
   ```bash
   npm install react vite sass
   ```
3. Añadir scripts:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build"
   }
   ```
4. Ejecutar entorno de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🧾 En resumen

- **Node.js** ejecuta JavaScript fuera del navegador.
- **NPM** gestiona las librerías del proyecto.
- **package.json** define dependencias y scripts.
- **Vite** automatiza el flujo de desarrollo y empaqueta el código para producción.


# 1.7.2 Adalab Web Starter Kit

Hemos preparado una base de código para hacer proyectos o ejercicios durante el curso. Esta base o plantilla usa **Vite** para ejecutar una serie de tareas (procesar los SCSS, gestionar las imágenes, los JS, etc.) y tiene una estructura más adaptada a un proyecto real.

---

## 📁 Estructura del proyecto

Un proyecto base o plantilla tiene la estructura de carpetas más cómoda para organizar los ficheros del proyecto. Además, incluye los archivos mínimos para empezar.

**Carpetas principales:**

- `src/`: donde tenemos nuestros archivos de trabajo: HTML, SCSS y JS.
- `public/`: donde pondremos los ficheros estáticos que apenas cambian (imágenes, favicon, fuentes...).
- `docs/`: opcional. Aquí se genera la versión de producción lista para subir a **GitHub Pages**.

---

## ⚙️ Automatización de tareas

En los ficheros del **Adalab Web Starter Kit** se incluyen configuraciones con comandos y automatizaciones básicas para tareas repetitivas.

---

## 🚀 Cómo trabajar con el Adalab Web Starter Kit

Podemos descargarlo de dos formas (recomendada la segunda):

1️⃣ **Clonando el repositorio:**
```bash
git clone https://github.com/Adalab/adalab-web-starter-kit.git
```

2️⃣ **Descargando el ZIP:**
- Haz clic en el botón verde **Code → Download ZIP**.
- Descomprime el archivo en tu ordenador.

Luego, abrimos la carpeta `adalab-web-starter-kit` con **Visual Studio Code** y ejecutamos en la terminal:

```bash
npm install
```
➡ Instala automáticamente todas las dependencias necesarias dentro de `node_modules`.

```bash
npm run dev
```
➡ Inicia un servidor local que abre el fichero `index.html` en el navegador.

Cada vez que guardes un archivo, la página se recargará automáticamente.

> 💡 Nota: No usamos la extensión “Live Server” cuando trabajemos con el Starter Kit.

---

## 📦 Cuándo usar el Starter Kit

Usaremos el Starter Kit en:
- Proyectos de grupo.
- Proyectos medianos o grandes.
- Páginas donde usemos **Sass**.

En proyectos pequeños o ejercicios individuales, no es obligatorio.

---

## 🧩 Doble estructura de carpetas

El Starter Kit contiene **código duplicado** (HTML, CSS, JS) en `src` y `docs`:

- `src/`: desarrollo → aquí escribimos nuestro código.
- `docs/`: producción → se genera automáticamente para subir al servidor.

> ℹ️ “src” viene de *source code* (código fuente).

---

## 🧱 Partials

No podemos usar directamente `src/` en el navegador porque el Starter Kit incluye “ayudas” que permiten dividir el código HTML en partes reutilizables (partials).

### Ejemplo:
```html
<body>
  <div class="page">
    <load src="./partials/header.html" title="Bienvenidos a Adalab" />
    <load src="./partials/main.html" />
    <load src="./partials/footer.html" />
  </div>
  <script src="./js/main.js"></script>
</body>
```

Las etiquetas `<load>` no son estándar de HTML; funcionan solo dentro del Starter Kit gracias a un **plugin de Vite**.

Ejemplo de un partial:

```html
<footer class="page__footer">
  <small>
    &copy; Todos los derechos reservados
    <load
      src="/partials/link.html"
      aClass="link__adalab"
      text="Adalab"
      url="https://adalab.es"
    />
  </small>
</footer>
```

### Estructura de partials:
```plaintext
index.html
  ├── partials/header.html
  ├── partials/main.html
  │     ├── partials/link.html
  │     ├── partials/link.html
  └── partials/footer.html
        └── partials/link.html

more-info.html
  ├── partials/header.html
  └── partials/footer.html
        └── partials/link.html
```

Puedes crear los partials que necesites dentro de `src/partials`.

---

## ⚡ Tareas automáticas

### `npm run dev` o `vite`
- Lanza un servidor web y “watchers” que detectan cambios en los archivos SCSS, JS y HTML.
- Compila los SCSS en CSS.
- Agrupa todas las **media queries** al final del archivo CSS.

### `npm run build` o `vite build`
- Genera una **versión lista para producción** en `docs/`.
- No lanza servidores ni watchers.
- Equivalente a un **deploy**.

---

## 🔄 Migración de proyectos colaborativos

Antes de migrar, todas las ramas deben estar combinadas (mergeadas) en `main`.

### Pasos de migración:

1. Comprobar que todos los cambios están en `main`.
2. Guardar los ficheros actuales.
3. Crear una carpeta `version-0` en la raíz del proyecto y mover allí todo el contenido actual.
4. Descargar el Starter Kit (ZIP o `git clone`) y copiar sus archivos a la raíz del proyecto.
5. Ejecutar:
   ```bash
   npm install
   npm run dev
   ```
6. Mover los archivos antiguos:
   - Copiar imágenes a `public/images`.
   - Mover `index.html` a `src/` (sustituir el anterior).
   - Copiar los estilos de `version-0/styles/main.css` dentro de `src/scss/main.scss` (debajo de los `@use`).
   - Si hay una hoja de reset, copiar su contenido a `src/scss/core/_reset.scss`.

7. Corregir rutas en `index.html`:
   ```html
   <link rel="stylesheet" href="./scss/main.scss" />
   ```

---

## 🧠 Motor de plantillas (Templating Engine)

Un **motor de plantillas** permite:
- Dividir el HTML en partes pequeñas (*partials*).
- Separar estructura (etiquetas) y contenido (texto/imágenes).

Esto facilita la reutilización y el mantenimiento del código.

---

## 🧩 Ejercicios

### 1️⃣ Trabajando con el Adalab Web Starter Kit

> Este ejercicio es importante; hazlo mientras lees la lección.

1. Descarga el Starter Kit.
2. Observa sus carpetas y ficheros.
3. Ejecuta `npm install` → ¿Qué carpeta se crea?
4. Ejecuta `npm run dev` → ¿Qué carpeta se crea?
5. Explica qué hace cada tarea de Vite.
6. Ejecuta `npm run docs` → ¿Qué carpeta se crea?
7. Abre los dos `main.css` y compara las diferencias.

---

### 2️⃣ Mi primera migración

> También importante. Intenta hacerlo paso a paso.

1. Localiza tu ejercicio del gazpacho (o cualquier otro).
2. Crea un repositorio nuevo en GitHub y clónalo.
3. Copia los ficheros del ejercicio en el repo.
4. Sube todo a `main`.
5. Crea una rama `migration` y cámbiate a ella.
6. Descarga el Starter Kit y migra el proyecto dentro de esa rama.
7. Sube los cambios con `git push` a la rama.

---
