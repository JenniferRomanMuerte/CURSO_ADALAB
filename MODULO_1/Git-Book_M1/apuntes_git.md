# GIT y GIT-HUB

 Git es la herramientas con la que trabajamos en nuestro ordenador para guardar nuestros cambios

 Git-Hub es un alamacenamiento en la nube de nuestro código. Cada proyecto es un repositorio.


## 1º.CREACIÓN DEL REPOSITORIO

1º. Nos metemos en Git-Hub y creamos un repositorio:
- Le damos el nombre
- Asignarlo como privado ( sólo lo veo yo) o como público(lo puede ver todo el mundo, pero no lo pueden modificar)
- add README: Nos crea un fichero .md para la documentación
- Add .gitignore: Nos crea un fichero donde incluiremos los archivos que no queremos que se suban al repositorio
- Add license: Le asignamos la licencia que queramos (que nos mencionen si lo usan....)

2º. Asignar a los colaboradores del proyecto
- Se añade al colaborador y le asignamos los permisos


## 2º.CLONAR EL REPOSITORIO

1º. Abrimos la carpeta padre donde se va alojar ( !!!!! no clonar repos dentro de repos)
2º. En la terminal una vez situados en la ruta de nuestra carpeta:
git clone 'url del repositorio' (la copiamos de Git-Hub)


## 3º. SINCRONIZAR / DESCARGAR CAMBIOS

1º. Comprobar siempre si en la terminal estamos en la carpeta del repositorio
2º. Mirar 1º si hay cambios en Git-Hub o con el comando: **git fetch**
3º. Descargar los cambios con el comando: **git pull**


## 4º. ETIQUETAR MIS CAMBIOS

En el panel de ficheros de Visual:
- Cuando hacemos cambios en un fichero nos indica con una 'M' al lado del fichero
- Cuando creamos un fichero nuevo nos sale en verde y con una 'U' al lado del fichero

1º. Añadir los cambios que hemos hecho para subirlos a Git-Hub
- Podemos añadir ficheros sueltos :
**git add 'fichero.txt'**
- Podemos añadir todos los ficheros que hayamos cambiado:
**git add -A**

2º. Una vez que tenemos añadidos los ficheros que queremos subir, tenemos que añadirlos aun commit,y se quedarán guardados en nuestra área de trabajo
**git commit -m "Mensaje explicativo de lo que estamos subiendo"**


## 5º. SUBIR CAMBIOS A GIT-HUB

Para que los cambios se suban a Git-Hub y estén disponibles para todos los colaboradores, una vez que tenemos creado el commit en nuestro ordenador:
**git push**


## 6º. CONFLICTOS

Puede ser que un colaborador haya subido cambios al Git-Hub de un fichero que no nos hemos descargado y nosotros hayamos hecho cambios en el mismo antes de bajar los de la compi.
En ese caso Git nos avisará que hay un conflicto y que debemos resolverlo, nos sale el fichero con los nuestro y lo que no hemos bajado y vamos eligiendo que hacer (con que nos quedamos y con que no, que juntamos...)
Una vez resuelto el conflicto podemos subir el fichero:
git add -A
git commit -m "Conflicto resuelto"
git push

## 6º. CREANDO RAMAS

Para no subir tod@s a la vez nuestro código a la rama main y evitar conflictos existen las ramas.
Para crear una rama y movernos a ella tenemos dos comandos:
``` bash
git branch nombre-de-la-rama
git checkout nombre-de-la-rama

```
También tenemos un atajo para crear la rama y cambiarnos a ella directamente:
``` bash
git checkout -b nombre-de-la-rama

```
Para subir nuestros cambios a git-Hub en nuestra rama:
**git push origin nombre-de-la-rama**

La primera vez usaremos el git push con -u:
**git push -u origin nombre-de-la-rama**


### FUSIONANDO RAMAS

Una vez que hemos terminado el trabajo en nuestra nueva rama y lo hemos subido al servidor remoto, querremos aplicar estos cambios en nuestra rama principal, main.

Para ello nos vamos a la rama de destino (en este caso main) con git checkout main, y escribimos:
**git merge nombre-de-la-rama**

Esto combinará nuestra versión local de la rama nombre-de-la-rama con la rama donde estemos, en este caso, main. Si todo va bien, combinará las ramas, creará un commit automático y si hacemos git status nos dirá que solo queda hacer un git push origin main.

### REVERTIR COMMIT
A veces hacemos un commit y luego nos arrepentimos, podemos regresar a la versión anterior.

1º Tenemos que ver los commit que se han hecho, usamos el comando:
**git log**

2º Identificar el hash de ese commit (es un nº muy largo):
Ejemplo: e139ca3e275be608eed457ab08395e6347e804bf

3ºRevertimos ese commit con este comando seguido del hash:
**$ git revert e139ca3e275be608eed457ab08395e6347e804bf**

## RESUMEN COMANDOS

- Clonar el repo:
  **git clone 'url del repositorio'**
- Comprobar si hay cambios:
  **git fetch**
- Para ver el estado del repositorio:
  **git status**
  (Nos dice si hay cambios en el repositorio sin bajar y si tenemos cambios en nuestro ordenador sin subir)
- Descargar los cambios:
  **git pull**
- Añadir los cambios que queremos subir:
  **git add 'fichero.txt'** (Añadimos sólo ese fichero).
  **git add -A** (Añadimos todos los ficheros en los que hayamso hecho cambios).
- Para subir los cambios a nuestra área de trabajo:
  **git commit -m "Mensaje explicativo de lo que estamos subiendo"**
- Subir los cambios a Git-Hub:
  **git push**
- Crear una rama
  **git branch nombre-de-la-rama**
- Movernos a una rama
**git checkout nombre-de-la-rama**
- Crear la rama y cambiarnos a ella directamente
**git checkout -b nombre-de-la-rama**
- Para movernos de una rama a otra
**git checkout -b nombre-de-la-rama**
- Para subir nuestros cambios a git-Hub en nuestra rama:
**git push origin nombre-de-la-rama**
- La primera vez usaremos el git push con -u:
**git push -u origin nombre-de-la-rama**
- Fusionar ramas (debemos estar colocadsos en la rama main)
**git merge nombre-de-la-rama**
- Ver los commit relaizados:
**git log**
- Revertir commit (debemos saber el hash):
**$ git revert e139ca3e275be608eed457ab08395e6347e804bf**

