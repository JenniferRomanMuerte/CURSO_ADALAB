# 1.6.1 Control de versiones

> **Nota:** los ejercicios de esta lección son muy colaborativos. Te proponemos que los ejercicios 1-6 los dejes para la hora de *pair programming* de la próxima jornada y mientras te lees la lección eches un vistazo a los ejercicios 7, 8 y 9.

---

## 🧠 Introducción

Hasta ahora hemos hecho una primera aproximación, nada menor, a **Git**. Sabemos crear un repositorio y subir y bajar cambios a través de:

```bash
git add -A
git commit -m "Commit message"
git push
```

Hoy vamos a ver cómo mejorar nuestros repos y trabajar en grupo sobre el mismo proyecto y sus archivos.

---

## 🚀 Mejorando nuestros repositorios

A continuación vamos a explicar tres ficheros que usamos en los repositorios para gestionarlos mejor y añadir información útil para las personas que accedan a ellos.

---

### 📄 README.md

El archivo `README.md` es un documento escrito en **Markdown** y que se presenta en la página principal del repositorio. Tiene como objeto aportar una primera documentación o presentación del proyecto.

**Markdown** es un lenguaje de marcado, como HTML, pero más simple. Al ser más simple y permitirnos menos opciones, resulta más fácil de aprender y aporta un formato común a todos los proyectos que hay en GitHub.

#### 🧩 Ejemplos de README.md:

- [React](https://github.com/facebook/react)
- [Editor de código VS Code](https://github.com/microsoft/vscode)
- [Excalidraw (App para dibujar bocetos)](https://github.com/excalidraw/excalidraw)

> 💡 Os recomendamos que cuando tengáis tiempo le pongáis un buen `README.md` a todos vuestros repositorios.
> Las empresas que están buscando Adalabers lo agradecerán.

---

### 🧱 .gitignore

**Git** tiene un sistema para poder *ignorar archivos* de un repositorio.
¿Y por qué querríamos hacer esto?
Porque hay archivos que necesitamos en nuestra carpeta de trabajo local pero que no queremos subir al repositorio ni controlar sus cambios.

En proyectos pequeños como los que tenemos ahora siempre querremos subir al repositorio remoto todos nuestros archivos.
Pero pronto pasará que tendremos, por ejemplo, una carpeta con los archivos de diseño de ciertas partes del proyecto, o archivos comprimidos que usamos para enviar los avances a nuestro cliente.

> 📌 Nota: es muy común que el propio sistema operativo cree en cada carpeta una serie de archivos o carpetas ocultas que le ayudan a realizar tareas como la búsqueda de archivos.
> No subiremos estos archivos del sistema operativo al repositorio remoto.

Estos archivos, que no tiene sentido tener "controlados", pero que queremos mantener en nuestro repo local, se indican en este archivo especial, **.gitignore**, para decirle al algoritmo de Git que no los tenga en cuenta.

🔗 En [gitignore.io](https://www.toptal.com/developers/gitignore) podemos encontrar una serie de configuraciones ya hechas que nos ayudan a ignorar tipos de archivos comunes según el sistema operativo o el lenguaje en el que trabajemos.

---

### ⚖️ Licencia

Uno de los puntos clave en un entorno social donde publicar todos tus proyectos, es indicar **cómo y en qué términos se deben usar**.
Para esto están las **licencias**, que son archivos jurídicos que especifican qué se puede y qué no se puede hacer con los archivos asociados.

GitHub nos ofrece un enlace con orientación sobre qué licencia elegir en cada caso:
👉 [choosealicense.com](https://choosealicense.com)


# 1.6.2 Trabajo Colaborativo

Otra de las bondades de **Git** es que hace más seguro y fácil trabajar en grupo. Nos evita, por ejemplo, tener que compartir archivos a través del e-mail, o perder código cuando una compañera lo sobrescribe por error.

Durante las primeras semanas de utilizar Git, solemos equivocarnos y creemos que hemos perdido un montón de código que nos ha costado la vida crear. Y lo que es peor, a veces nos pasa esto con el código de nuestras compañeras. Pues gracias a Git, todo lo que esté dentro de un *commit* no se pierde nunca. Git nos permite viajar al pasado, recuperar el código y volver al presente.

---

## 🔐 Permitir colaboradoras en el repositorio

El primer paso es permitir a nuestras compañeras que modifiquen nuestro repo.
Desde el GitHub de nuestro repositorio accedemos a **Settings → Manage access**, donde podremos añadir a nuestras colaboradoras favoritas (o a las que nos toquen 😉).

---

## 💻 Modificar archivos en local y subir a remoto los cambios

Ya lo hemos ido viendo estos días:

1. Se modifican los archivos y se guardan los cambios en el editor.
2. Se añaden para su control con:
   ```bash
   git add -A
   ```
   (añade todos los archivos modificados) o con:
   ```bash
   git add nombre-de-archivo
   ```
   (añade solo el archivo especificado).
3. Creamos el commit con:
   ```bash
   git commit -m "Short description of the commit"
   ```

Hasta aquí todo normal. Ahora llega el momento de subir el *commit* (o los *commits*, si hemos hecho varios) con nuestros cambios al repositorio remoto:

```bash
git push origin main
```

Aquí pueden pasar varias cosas:

- ✅ **Que se suba bien**, sin problemas ni conflictos. *Yay!*
- ⚠️ **Que no podamos subir los cambios** porque no estemos trabajando con la última versión. Lo sabremos porque la terminal nos muestra un error.

En ese caso, tendremos que hacer:

```bash
git pull
```

para actualizar nuestro repositorio local con la última versión del remoto, es decir, traer los últimos cambios hechos por otras personas a nuestro ordenador.

> 💡 **Consejo:** Antes de comenzar a trabajar o antes de hacer un commit, es buena práctica hacer `git pull` para mantenernos al día con los cambios del repositorio remoto.

---

## 🔄 ¿Qué pasa cuando hacemos un `git pull`?

1. Git comprueba si en el repositorio remoto hay una versión más nueva.
2. Si encuentra cambios posteriores, se los baja e intenta **combinarlos** con nuestros commits.

Existen dos posibles escenarios:

### 🟢 Soft merge (combinación automática)
Git puede combinar los cambios automáticamente.
Entonces crea un commit automático con la unión de los cambios (merge) y lo muestra en el editor por defecto (Nano, Vim, etc.).

### 🔴 Hard merge (conflicto manual)
Git **no puede combinar los cambios automáticamente**, por lo que nos avisa de que hay **conflictos** que debemos resolver manualmente.
Nos mostrará una lista de archivos donde se encuentran los conflictos.

> 📖 En ambos casos, podemos cambiar el mensaje del commit automático o poner uno nuevo.

---

## ⚔️ ¿Qué pinta tiene un conflicto?

Un conflicto ocurre cuando Git se encuentra con **dos versiones del mismo bloque de código**.
Entonces marca el documento para que elijamos cuál conservar.

Ejemplo:

```bash
<<<<<<< HEAD
# Tu código actual
=======
# Código nuevo del remoto
>>>>>>> rama-remota
```

- `<<<<<<<` → inicio de la zona de conflicto (tu versión local)
- `=======` → separador entre ambas versiones
- `>>>>>>>` → final de la zona de conflicto (versión remota)

En ese punto podemos:
- Quedarnos con una versión
- Mantener ambas
- O mezclarlas manualmente

Una vez decidido, quitamos los separadores (`<<<<<<<`, `=======`, `>>>>>>>`), guardamos el archivo y hacemos:

```bash
git add nombre-del-archivo
git commit
git push origin main
```

> ⚠️ Los conflictos más pequeños se resuelven fácilmente, pero en los más complicados conviene **hablar con la compañera** que haya hecho los cambios para decidir qué hacer. Nunca sobrescribas su código sin consenso.

---

## 🎥 Vídeo explicativo

📺 **Cómo trabajar dos personas en paralelo y resolver merges (soft & hard):**
[Ver vídeo en YouTube](https://www.youtube.com/watch?v=HgY2zFxeJDU)

---

## 🧩 VS Code y Git

**Visual Studio Code** incluye una integración nativa con Git y GitHub que facilita mucho las tareas del día a día.

### Colores de los archivos

- 🟩 Verde → Ficheros **nuevos** respecto al último commit.
- 🟨 Amarillo → Ficheros **modificados** desde el último commit.

### Indicadores de línea

En el editor de código (a la izquierda de los números de línea):
- 🟨 Amarillo → Líneas modificadas.
- 🟩 Verde → Líneas nuevas.

### Herramientas visuales

- VS Code ofrece una interfaz para resolver conflictos con botones de:
  - “Accept Current Change”
  - “Accept Incoming Change”
  - “Accept Both Changes”

Y también un panel de **Source Control** donde se puede ver qué archivos han cambiado, qué commits hay pendientes y qué ramas están activas.

📘 Más info: [VS Code & Git](https://code.visualstudio.com/docs/sourcecontrol/overview)


# 1.6.3 Ramas

Ya habréis visto que cuando subimos los commits escribimos:

```bash
git push origin main
```

Con esto estamos diciendo que suba nuestra rama **main** al repositorio remoto.

---

## 🌿 ¿Qué es una rama?

Git nos permite crear **versiones paralelas** de nuestro proyecto para poder desarrollar o probar varias funcionalidades a la vez sin miedo a perder lo hecho hasta ahora.

![Trabajo sin ramas y trabajo con ramas](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-d482ee601520b2f5a320dde755d1c0c7d7f06f2e%252Ftrabajo-en-ramas.png%3Falt%3Dmedia&width=400&dpr=3&quality=100&sign=88562758&sv=2)

Cuando iniciamos un repositorio Git, se crea una primera rama, que se llama **main** por convención. En la última sesión trabajamos en esa rama.

---

## 🌱 Creando ramas

Para crear una rama y movernos a ella tenemos dos comandos:

```bash
git branch nombre-de-la-rama
git checkout nombre-de-la-rama
```

También tenemos un **atajo** para crear la rama y cambiarnos a ella directamente:

```bash
git checkout -b nombre-de-la-rama
```

En cualquier caso, si queremos movernos de una rama a otra usaremos:

```bash
git checkout nombre-de-la-rama
```

De esta manera podemos movernos a nuestra nueva rama o volver a **main** en cualquier momento.

> 💡 Si modificamos un archivo e intentamos movernos de rama sin guardar los cambios en un commit, no nos dejará.
> Para poder movernos entre ramas primero debemos **añadir los cambios** a un commit.

---

## 💾 Subir ramas al remoto

Añadir archivos y crear un commit funciona igual, pero cuando queramos hacer un *push* usaremos:

```bash
git push origin nombre-de-la-rama
```

La **primera vez** usaremos el push con `-u`:

```bash
git push -u origin nombre-de-la-rama
```

---

## 🔀 Fusionar ramas

Una vez que hemos terminado el trabajo en nuestra nueva rama y lo hemos subido al servidor remoto, querremos aplicar estos cambios en nuestra rama principal, **main**.

Para ello:

1. Nos vamos a la rama de destino (en este caso `main`):

   ```bash
   git checkout main
   ```

2. Fusionamos los cambios con:

   ```bash
   git merge nombre-de-la-rama
   ```

Esto combinará nuestra versión local de la rama `nombre-de-la-rama` con la rama donde estemos (en este caso, `main`).
Si todo va bien, combinará las ramas, creará un commit automático y si hacemos:

```bash
git status
```

nos dirá que solo queda hacer un:

```bash
git push origin main
```

> 📌 Nota: es importante haber hecho `git pull` en la rama que vamos a fusionar antes de empezar el proceso de fusión, para asegurarnos de que tenemos la última versión en ambas ramas.

---

## 🎥 Vídeos recomendados

📺 **Cómo trabajar con varias ramas, movernos entre ramas, publicarlas y mergearlas:**
[Ver en YouTube](https://youtu.be/MnaRLneoiSo)

📺 **Qué ramas debemos usar y cómo y cuándo mover el código entre ellas:**
[Ver en YouTube](https://youtu.be/t-GbqNDrJ4A)

---

## 😱 ¡Oh, dios mío! ¡¡He hecho un commit que no quería hacer!!

¿Qué pasa si hago un cambio, lo añado, hago commit y luego... me arrepiento?
No pasa nada: para eso trabajamos con un **control de versiones**.

Esto puede ocurrir por inexperiencia o descuido, pero no hay que tener miedo.
Cada commit queda registrado y siempre podemos **volver atrás o revertir** el último.

---

## 📜 Ver el historial de commits

Si queremos ver nuestra actividad en el proyecto usamos el comando:

```bash
git log
```

Esto nos muestra un listado de los commits realizados.

![Ejemplo de git log](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-0cc6787d6cd65662c2f4c8f75b9dcab2fd1d64f6%252Fgit-log.png%3Falt%3Dmedia&width=768&dpr=4&quality=100&sign=29b83700&sv=2)

En este caso, con el último commit, hemos borrado el archivo `readme.md` por error.

---

## 🔁 Revertir un commit

Queremos deshacer ese commit, que tiene el número (o hash):
`e139ca3e275be608eed457ab08395e6347e804bf`.

Usamos:

```bash
git revert e139ca3e275be608eed457ab08395e6347e804bf
```

### Git revert paso 1
![Git revert paso 1](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-e48ebfadb9fc816d8f5c8184fca81292dca8a725%252Fcommit-revert.png%3Falt%3Dmedia&width=300&dpr=2&quality=100&sign=d4bc4783&sv=2)

### Git revert paso 2
![Git revert paso 2](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-d8226857f8a211e9f994c73e70dcf636c898fe98%252Fcommit-revert-2.png%3Falt%3Dmedia&width=300&dpr=4&quality=100&sign=fe556264&sv=2)

### Git revert paso 3
![Git revert paso 3](https://books.adalab.es/materiales-del-curso-pw-ft/~gitbook/image?url=https%3A%2F%2F2908775143-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFeL5m4e6ES4PMjY0BYJw%252Fuploads%252Fgit-blob-06642ccbbfe77fb7405950f2c83a979987d234b7%252Fcommit-revert-3.png%3Falt%3Dmedia&width=300&dpr=4&quality=100&sign=81a4ab9e&sv=2)

Una vez hecho el revert, si hacemos:

```bash
git log
```

podemos ver cómo queda el historial de commits, reflejando la reversión.


# 1.6.4 GitHub Pages

**GitHub Pages** es un servicio que ofrece GitHub y permite utilizarlo como **hosting gratuito** para los proyectos que tengamos alojados en sus repositorios.

Un *hosting* es un servicio de almacenamiento de ficheros que nos permite tener nuestra web en un servidor y que esté disponible en Internet.
Esto es exactamente lo que ofrece **GitHub Pages**.

---

## 🚀 Activar GitHub Pages en un repositorio

Sigue estos pasos:

1. Ve al repositorio en **GitHub**.
2. Entra en la pestaña **Settings**.
3. Desplázate hasta el apartado **GitHub Pages**.
4. En la opción *Source*, selecciona **main branch** (antes se llamaba *master branch*).
5. GitHub generará automáticamente una **URL pública** donde podrás ver tu sitio.

⌛ Espera unos minutos (suele tardar unos 5).
Luego entra en la URL generada para ver tu página publicada.

> 💡 Si al entrar solo ves el contenido del `README.md`, es porque **no tienes un fichero `index.html`** en la raíz del repositorio.

---

## 🌐 Añadir la URL del sitio en la portada del repositorio

Para que otras personas puedan acceder fácilmente a tu web:

1. Ve a la página principal del repositorio.
2. Debajo de la pestaña **Settings**, pulsa el botón **Edit** (en la parte derecha, junto a la descripción del proyecto).
3. En el campo **Website**, pega la URL generada por GitHub Pages.
4. Guarda los cambios.

De este modo, la URL aparecerá visible en la parte superior del repositorio.

---

## 🏫 GitHub Classroom

**GitHub Classroom** es una extensión o "módulo" de GitHub que permite **automatizar la gestión de repositorios y el control de acceso** para entornos educativos.

Durante el curso se utiliza para:

- Asignar ejercicios y prácticas individuales o grupales.
- Gestionar el envío de tareas.
- Supervisar el progreso del alumnado.

Más información: [GitHub Classroom Docs](https://classroom.github.com/)

---

## 🧩 Issues (Tickets)

GitHub, al igual que otros servicios de control de versiones, incorpora un sistema de **tickets o issues**.

Estos sirven para crear pequeñas tareas, como:

- Reportar errores o bugs 🐞
- Solicitar información ❓
- Proponer nuevas funcionalidades 💡

Además, los *issues* permiten:

- Asignar responsables.
- Clasificar por etiquetas (*labels*).
- Vincularlos a *commits* o *pull requests* relacionados.

> 💬 Si conoces herramientas como **Trello**, el sistema de *issues* funciona de forma similar a las tarjetas (cards).

---

📘 **Resumen rápido:**
- GitHub Pages = Hosting gratuito para proyectos web.
- GitHub Classroom = Gestión de ejercicios y repos educativos.
- Issues = Sistema de tareas y seguimiento dentro del repositorio.



# 1.6.5 Git Remote

> 📝 **Nota:** esta mini lección es un *bonus*.

---

## 🌍 ¿Qué es un remote en Git?

Hemos aprendido que nuestro **repositorio local** está asociado a un **repositorio remoto** en GitHub.
Pero Git nos permite **asociar y sincronizar** un mismo repositorio local con **varios repositorios remotos**.

Por ejemplo:

- Uno puede ser nuestro **repositorio personal** en GitHub.
- Otro puede ser el **repositorio de la empresa** donde trabajamos.
- Y un tercero puede estar asociado a un **servicio de hosting**, como *Heroku* o *Vercel*.

A cada una de estas asociaciones se les llama **remote**, y cada *remote* tiene normalmente **dos URLs** asociadas:

- Una para hacer **push** (subir cambios).
- Otra para hacer **fetch/pull** (descargar cambios).

> En la práctica, ambas URLs suelen ser la misma.

---

## 🔗 Ver los remotes configurados

Cuando clonamos un repositorio por primera vez, se crea automáticamente un *remote* llamado `origin`.
Podemos ver los *remotes* actuales con el siguiente comando:

```bash
git remote -v
```

Salida típica:

```bash
origin  https://github.com/usuariogithub/nombre-repo.git (fetch)
origin  https://github.com/usuariogithub/nombre-repo.git (push)
```

---

## ➕ Añadir un nuevo remote

Podemos añadir un nuevo repositorio remoto con el comando:

```bash
git remote add nombre-remoto https://servidorgitremoto.adalab/rutagitremoto.git
```

Por ejemplo, podríamos tener algo así:

- `origin` → Repositorio principal en GitHub.
- `heroku` → Repositorio remoto de despliegue en Heroku.
- `empresa` → Repositorio compartido del equipo de trabajo.

---

## 🚀 Subir el código a un remote específico

Si queremos subir nuestros cambios a un remoto concreto, usamos `git push` indicando el nombre del remoto y la rama:

```bash
git push nombre-remoto rama-local:main
```

Por ejemplo:

```bash
git push heroku main
```

Subirá la rama local `main` al remoto llamado `heroku`.

> 💡 Si no indicamos ningún remoto, Git usa por defecto `origin`.

---

📘 **Resumen rápido:**

| Acción | Comando | Descripción |
|--------|----------|-------------|
| Ver remotes | `git remote -v` | Muestra los repositorios remotos configurados |
| Añadir remote | `git remote add nombre-remoto URL` | Crea un nuevo remoto |
| Subir código | `git push nombre-remoto rama` | Sube los cambios a un remoto concreto |

---

✅ **En resumen:**
Git permite conectar tu repositorio local con varios remotos a la vez, lo que facilita trabajar en distintos entornos, sincronizar código entre equipos y desplegar fácilmente tus proyectos.
