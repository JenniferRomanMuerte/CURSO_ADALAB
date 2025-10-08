
# ¿QUE ES NODE?

Es un programa que nos deja lanzar código js en nuestro ordenador.


## nmp

Sitio web donde se sube código que podemos reutilizar en nuestro proyecto.
Cada uno de estos códigos se llaman paquetes o dependencias.


## Vite

Un paquete para automatizar tareas, dentro de éste tenemos pluggins (herramientas) que podemos instalar
para diferentes tareas, las que nos interesen.


## Starter Kit

Proyecto de Adalab para usar Vite en nuestras páginas web.
Para poder usarlo lo podemos descargar

### ARCHIVOS DEL STARTER KIT

- vit.config.js:
  Configuración de Vite para usar los pluggins
- package.json:
  Fichero con información de nuestro proyecto, con las dependencias necesarias para nuestro proyecto.
- .package-lock.json:
  Se crea automaticamente con las dependencias necesarias que traen los paquetes o dependencias que nosotrasd hemos instalado
- eslintrc-json:
  Está configurado para saltar errores de escribir el código


### CARPETAS DEL STARTER KIT

**src**
- Los ficehros html
- Carpeta scss ( Nuestros archivos css pero escritos en sass)
- Carpeta partials: Más archivos html que son partes de otro html
- Carpeta js con nuestros archivos de javascript

**public**
 Carpeta donde guardaremos nuestras imagenes... (recursos que nos hacen falta para nuestra web)

**docs**
Carpeta para produccción, en esta carpeta no se toca nada de código.
Es una mezcla de src y public preparada para subirla a producción.


### CÓMO SE TRABAJA CON EL STARTER KIT
 - 1º Cuando se arranca el proyecto por 1º vez, instalar vite y las dependencias: npm install (npm i)
 - 2º Para arrancar el programa ya no usamos Live Server se usa npm run dev,
      ésto nos abre nuestro proyecto en el navegador.

### HEMOS CREADO EL TEMPLATE DE KIT START PARA HACER NUESTROS PROYECTOS CON ESA PLANTILLA