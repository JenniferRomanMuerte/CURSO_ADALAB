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



