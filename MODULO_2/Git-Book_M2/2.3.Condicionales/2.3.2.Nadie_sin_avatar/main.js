"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.jp/150x150.png";
// avatar que eligió el usuario al registrarse
let userAvatar = "https://placecats.com/300/200";

// Capturamos el elemento con la etiqueta img
const imgElement = document.querySelector(".user__avatar");
console.log(imgElement);
/*
Le asignamos la propiedad src con la ruta de userAvatar
imgElement.src = userAvatar;
*/

// Si userAvatar está vacio le asignamos la imagen por defecto
userAvatar = "";
imgElement.src = userAvatar || DEFAULT_AVATAR;