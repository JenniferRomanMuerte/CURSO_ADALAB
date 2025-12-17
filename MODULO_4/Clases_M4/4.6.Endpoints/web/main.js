let animes =
[
  {
    "id": 1,
    "titulo": "Dragon Ball",
    "descripcion": "Cuenta las aventuras de Goku y sus amigos y enemigos.",
    "fecha_publicacion": "1986-02-26",
    "genero": "Shonen"
  },
  {
    "id": 2,
    "titulo": "Nana",
    "descripcion": "Historia de dos Nanas que comparten nombre y un destino entrelazado.",
    "fecha_publicacion": "2006-04-05",
    "genero": "Drama/Romance"
  },
  {
    "id": 3,
    "titulo": "Sailor Moon",
    "descripcion": "Usagi Tsukino se transforma en Sailor Moon para luchar contra el mal.",
    "fecha_publicacion": "1992-03-07",
    "genero": "Magical Girl"
  },
  {
    "id": 4,
    "titulo": "Cardcaptor Sakura",
    "descripcion": "Sakura Kinomoto debe capturar las cartas magicas Clow.",
    "fecha_publicacion": "1998-04-07",
    "genero": "Magical Girl"
  },
  {
    "id": 5,
    "titulo": "Revolutionary Girl Utena",
    "descripcion": "Utena Tenjou ingresa a la Academia Ohtori para combatir en duelos misteriosos.",
    "fecha_publicacion": "1997-04-02",
    "genero": "Drama/Fantasia"
  },
  {
    "id": 6,
    "titulo": "Puella Magi Madoka Magica",
    "descripcion": "Madoka Kaname enfrenta la decision de convertirse en chica magica.",
    "fecha_publicacion": "2011-01-07",
    "genero": "Fantasia oscura"
  },
  {
    "id": 7,
    "titulo": "Kill la Kill",
    "descripcion": "Ryuko Matoi busca al asesino de su padre en la Academia Honnouji.",
    "fecha_publicacion": "2013-10-04",
    "genero": "Accion"
  },
  {
    "id": 8,
    "titulo": "K-On!",
    "descripcion": "Yui Hirasawa y sus amigas forman una banda de musica ligera.",
    "fecha_publicacion": "2009-04-03",
    "genero": "Slice of Life"
  },
  {
    "id": 9,
    "titulo": "Lucky Star",
    "descripcion": "La vida cotidiana de Konata Izumi y sus amigas en la preparatoria.",
    "fecha_publicacion": "2007-04-08",
    "genero": "Slice of Life/Comedia"
  },
  {
    "id": 10,
    "titulo": "Azumanga Daioh",
    "descripcion": "Sigue las aventuras escolares de un grupo de estudiantes y su maestra.",
    "fecha_publicacion": "2002-04-08",
    "genero": "Slice of Life/Comedia"
  },
  {
    "id": 11,
    "titulo": "Nichijou",
    "descripcion": "La vida surrealista y comica de Yuuko, Mio y Mai en su escuela.",
    "fecha_publicacion": "2011-04-03",
    "genero": "Comedia"
  },
  {
    "id": 12,
    "titulo": "Little Witch Academia",
    "descripcion": "Akko Kagari aspira a convertirse en una gran bruja como su idolo.",
    "fecha_publicacion": "2017-01-09",
    "genero": "Fantasia"
  },
  {
    "id": 13,
    "titulo": "Violet Evergarden",
    "descripcion": "Violet, una ex soldado, trabaja como escritora de cartas para comprender sus emociones.",
    "fecha_publicacion": "2018-01-11",
    "genero": "Drama"
  },
  {
    "id": 14,
    "titulo": "Yuru Camp",
    "descripcion": "Rin Shima y Nadeshiko Kagamihara disfrutan del camping en la naturaleza.",
    "fecha_publicacion": "2018-01-04",
    "genero": "Slice of Life"
  }
]

function buildCard({ titulo, descripcion, fecha_publicacion, genero }) {
  const li = document.createElement("li");
  li.className = "anime-card";
  li.innerHTML = `
    <span class="anime-card__genre">${genero}</span>
    <h2 class="anime-card__title">${titulo}</h2>
    <p class="anime-card__desc">${descripcion}</p>
    <span class="anime-card__date">Publicado: ${new Date(fecha_publicacion).toLocaleDateString("es-ES")}</span>
  `;
  return li;
}

function renderAnimeList(list) {
  const container = document.getElementById("animeList");
  container.innerHTML = "";
  list.forEach(anime => container.appendChild(buildCard(anime)));
}

renderAnimeList(animes);


fetch('http://localhost:3000/api/animes')
  .then(res=>json())
  .then(data=>{
    animes = data;
    renderAnimeList(animes);
  })
  .catch(err =>{
     // sin fetch o error: se queda el listado local
  });