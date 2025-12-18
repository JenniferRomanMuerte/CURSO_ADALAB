// SECCIÓN DE QUERY-SELECTOR:

const animeGrid = document.querySelector('.js_animeGrid');

const tituloInput = document.querySelector('.js_tituloInput');
const descripcionInput = document.querySelector('.js_descripcionInput');
const guardarBtn = document.querySelector('.js_guardarBtn');
const errorBox = document.querySelector('.js_errorBox');


// SECCIÓN DE DATOS

// Datos de animes (no los usaremos porque hacemos fetch)

/* const animes = [
	{
		"id" : 1,
		"titulo" : "Dragon Ball",
		"num_temporadas" : 2,
		"num_capitulos" : 677,
		"fecha_publicacion" : "1986-02-26",
		"descripcion" : "Cuenta las aventuras de Goku y sus amigos y enemigos",
		"precio" : 12.50,
		"peso" : null,
		"stock" : 0,
		"distribuidora_id" : 0,
		"genero" : "Shonen"
	},
	{
		"id" : 2,
		"titulo" : "Nana",
		"num_temporadas" : 6,
		"num_capitulos" : 47,
		"fecha_publicacion" : "2006-04-05",
		"descripcion" : "Nana es un anime dramático y romántico que cuenta la historia de dos jóvenes mujeres de 20 años con el mismo nombre pero personalidades completamente opuestas",
		"precio" : null,
		"peso" : null,
		"stock" : 0,
		"distribuidora_id" : 0,
		"genero" : "Josei"
	},
	{
		"id" : 3,
		"titulo" : "Sailor Moon",
		"num_temporadas" : 5,
		"num_capitulos" : 200,
		"fecha_publicacion" : "1992-03-07",
		"descripcion" : "Usagi Tsukino se transforma en Sailor Moon para luchar contra las fuerzas del mal junto a las Sailor Guardians",
		"precio" : 25.99,
		"peso" : 1.2,
		"stock" : 15,
		"distribuidora_id" : 0,
		"genero" : "Shoujo"
	},
	{
		"id" : 4,
		"titulo" : "Cardcaptor Sakura",
		"num_temporadas" : 3,
		"num_capitulos" : 70,
		"fecha_publicacion" : "1998-04-07",
		"descripcion" : "Sakura Kinomoto debe capturar las cartas mágicas Clow que accidentalmente liberó",
		"precio" : 29.99,
		"peso" : 0.8,
		"stock" : 8,
		"distribuidora_id" : 0,
		"genero" : "Shoujo"
	},
	{
		"id" : 5,
		"titulo" : "Revolutionary Girl Utena",
		"num_temporadas" : 1,
		"num_capitulos" : 39,
		"fecha_publicacion" : "1997-04-02",
		"descripcion" : "Utena Tenjou ingresa a la Academia Ohtori para convertirse en un príncipe y proteger a Anthy",
		"precio" : 35.50,
		"peso" : 0.6,
		"stock" : 5,
		"distribuidora_id" : 0,
		"genero" : "Shoujo"
	},
	{
		"id" : 6,
		"titulo" : "Puella Magi Madoka Magica",
		"num_temporadas" : 1,
		"num_capitulos" : 12,
		"fecha_publicacion" : "2011-01-07",
		"descripcion" : "Madoka Kaname enfrenta la decisión de convertirse en chica mágica en un mundo oscuro",
		"precio" : 19.99,
		"peso" : 0.4,
		"stock" : 20,
		"distribuidora_id" : 0,
		"genero" : "Drama"
	},
	{
		"id" : 7,
		"titulo" : "Kill la Kill",
		"num_temporadas" : 1,
		"num_capitulos" : 24,
		"fecha_publicacion" : "2013-10-04",
		"descripcion" : "Ryuko Matoi busca al asesino de su padre en la Academia Honnouji enfrentándose a Satsuki Kiryuin",
		"precio" : 22.50,
		"peso" : 0.7,
		"stock" : 12,
		"distribuidora_id" : 0,
		"genero" : "Acción"
	},
	{
		"id" : 8,
		"titulo" : "K-On!",
		"num_temporadas" : 2,
		"num_capitulos" : 41,
		"fecha_publicacion" : "2009-04-03",
		"descripcion" : "Yui Hirasawa y sus amigas forman una banda de música ligera en el club de su escuela",
		"precio" : 18.99,
		"peso" : 0.9,
		"stock" : 10,
		"distribuidora_id" : 0,
		"genero" : "Musical"
	},
	{
		"id" : 9,
		"titulo" : "Lucky Star",
		"num_temporadas" : 1,
		"num_capitulos" : 24,
		"fecha_publicacion" : "2007-04-08",
		"descripcion" : "La vida cotidiana de Konata Izumi y sus amigas en la preparatoria",
		"precio" : 15.99,
		"peso" : 0.5,
		"stock" : 7,
		"distribuidora_id" : 0,
		"genero" : "Comedia"
	},
	{
		"id" : 10,
		"titulo" : "Azumanga Daioh",
		"num_temporadas" : 1,
		"num_capitulos" : 26,
		"fecha_publicacion" : "2002-04-08",
		"descripcion" : "Sigue las aventuras escolares de un grupo de estudiantes de preparatoria",
		"precio" : 17.50,
		"peso" : 0.6,
		"stock" : 6,
		"distribuidora_id" : 0,
		"genero" : "Comedia"
	},
	{
		"id" : 11,
		"titulo" : "Nichijou",
		"num_temporadas" : 1,
		"num_capitulos" : 26,
		"fecha_publicacion" : "2011-04-03",
		"descripcion" : "La vida surrealista y cómica de Yuuko, Mio y Mai en su ciudad",
		"precio" : 21.99,
		"peso" : 0.8,
		"stock" : 9,
		"distribuidora_id" : 0,
		"genero" : "Comedia"
	},
	{
		"id" : 12,
		"titulo" : "Little Witch Academia",
		"num_temporadas" : 1,
		"num_capitulos" : 25,
		"fecha_publicacion" : "2017-01-09",
		"descripcion" : "Akko Kagari aspira a convertirse en una gran bruja como su ídolo Shiny Chariot",
		"precio" : 24.99,
		"peso" : 0.7,
		"stock" : 11,
		"distribuidora_id" : 0,
		"genero" : "Fantasía"
	},
	{
		"id" : 13,
		"titulo" : "Violet Evergarden",
		"num_temporadas" : 1,
		"num_capitulos" : 13,
		"fecha_publicacion" : "2018-01-11",
		"descripcion" : "Violet, una ex soldado, trabaja como escritora de cartas para entender las emociones humanas",
		"precio" : 32.50,
		"peso" : 0.5,
		"stock" : 14,
		"distribuidora_id" : 0,
		"genero" : "Drama"
	},
	{
		"id" : 14,
		"titulo" : "Yuru Camp",
		"num_temporadas" : 2,
		"num_capitulos" : 25,
		"fecha_publicacion" : "2018-01-04",
		"descripcion" : "Rin Shima y Nadeshiko Kagamihara disfrutan del camping y la naturaleza",
		"precio" : 16.99,
		"peso" : 0.4,
		"stock" : 18,
		"distribuidora_id" : 0,
		"genero" : "Iyashikei"
	}
]; */

let animes = [];



// SECCIÓN DE FUNCIONES DE EVENTOS

const handleClickGuardarBtn = (ev) => {
  ev.preventDefault();

  errorBox.innerHTML = '';

  const titulo = tituloInput.value;
  const descripcion = descripcionInput.value;

  const nuevoAnime = {
    titulo,
    descripcion,
  };

  fetch('http://localhost:3000/api/animes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoAnime),
  })
    .then((res) => res.json())
    .then((dataResponse) => {
      if (dataResponse.success) {
        animes.push(nuevoAnime);

        renderizarAnimes();

				tituloInput.value = '';
				descripcionInput.value = '';
      } else {
        errorBox.innerHTML = `Ha ocurrido un error: ${dataResponse.error}`;
      }
    })
    .catch((err) => {
      errorBox.innerHTML = `Ha ocurrido un error gordo en el servidor.`;
    });
};



// SECCIÓN DE EVENTOS

guardarBtn.addEventListener('click', handleClickGuardarBtn);



// SECCIÓN DE FUNCIONES PARA GENERAR EL LISTADO (RENDER)

// Función para formatear la fecha
function formatearFecha(fecha) {
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(fecha).toLocaleDateString('es-ES', opciones);
}

// Función para crear un cromo de anime
function crearCromoAnime(anime) {
  return `
        <article class="anime-card">
            <header class="anime-card__header">
                <h2 class="anime-card__title">${anime.titulo}</h2>
                <span class="anime-card__genre">${anime.genero}</span>
            </header>
            <div class="anime-card__body">
                <p class="anime-card__description">${anime.descripcion}</p>
            </div>
            <footer class="anime-card__footer">
                <span class="anime-card__date">${formatearFecha(
                  anime.fecha_publicacion
                )}</span>
            </footer>
        </article>
    `;
}

// Función para renderizar todos los animes
function renderizarAnimes() {
	let html = '';

	for( const anime of animes ) {
		html += crearCromoAnime(anime);
	}
  
  animeGrid.innerHTML = html;
}



// SECCIÓN DE CÓDIGO A LANZAR CUANDO CARGA LA PÁGINA


fetch('http://localhost:3000/api/animes')
  .then((res) => res.json())
  .then((data) => {
    animes = data;

    renderizarAnimes();
  })
  .catch((err) => {
    const animeGrid = document.getElementById('animeGrid');
    animeGrid.innerHTML = '<p>Ha ocurrido algún error en el servidor.</p>';
  });
