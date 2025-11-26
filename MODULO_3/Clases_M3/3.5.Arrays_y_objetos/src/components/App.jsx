// Fichero src/components/App.jsx
import '../styles/App.scss';

function App() {

  // OBJETO
  const book = {
  title: "La Biblioteca de Humo",
  author: "Elena Márquez",
  year: 2022,
  pages: 384,
  genre: "Fantasía",
  isAvailable: true,
  rating: 4.7,
  keywords: ["magia", "archivos", "misterio"],
  summary: "Un archivo infinito que respira, capítulos que cambian solos y una aprendiz que intenta descifrar el origen de los libros vivientes.",
};

// ARRAY
const books = [
  {
    title: "La Biblioteca de Humo",
    author: "Elena Márquez",
    year: 2022,
    pages: 384,
    genre: "Fantasía",
    isAvailable: true,
    rating: 4.7
  },
  {
    title: "El Último Mapa",
    author: "Jorge Lafuente",
    year: 2019,
    pages: 312,
    genre: "Aventura",
    isAvailable: false,
    rating: 4.2
  },
  {
    title: "Cuerdas Invisibles",
    author: "Marta Salcedo",
    year: 2020,
    pages: 256,
    genre: "Drama",
    isAvailable: true,
    rating: 4.5
  },
  {
    title: "La Máquina de Ecos",
    author: "Daniel Robles",
    year: 2021,
    pages: 410,
    genre: "Ciencia ficción",
    isAvailable: true,
    rating: 4.8
  }
];


// DESTRUCTURING DE OBJETOS
// Nombramos entre llaves las variables que queremos obtener (deben llamarse igual que las propiedades del objeto),
// y le decimos que son igual al objeto.
const {title, author, genre } = book;

// STRUCTURING DE OBJETOS
const nombre = 'Jennifer';
const edad = 43;
const promo = 58;

const persona = {
  nombre, edad, promo
};

const result = array.filter((item, index) => {
  return true; // condición
});

// DESTRUCTURING DE ARRAYS
// Podemos sacar elementos del array, siempre nos sacará en orden, y el resto sólo podemos ponerlo al final
const [firstBook, SecondBook, ...restOfBooks] = books;
console.log(firstBook);
console.log(SecondBook);
console.log(restOfBooks);


// SPREAD DE OBJETOS

// Objeto que contiene propiedades comunas de las alumnas
const pantillaAlumna = {
  promo:58,
  tutora: 'Ivanico',
  evaluacion:{
    modulo1: "Vuelta al cole ",
    modulo2: "Tienda de productos"
  }
}
// Objeto de una persona con propiedades particulares y añadimos a este objeto las propiedades comunas de la plantilla
const JenniferData = {
  nombre: "Jennifer",
  edad: 43,
  ...pantillaAlumna,
}

console.log(JenniferData);


// SPREAD DE ARRAYS

const nombres = ['Maria', 'Jennifer', 'Puri', 'Ivan'];

const nombresBis = [...nombres, 'Angel'];

console.log(nombres);
console.log(nombresBis);


  return (
    <div>
      <h1>Arrays Y Objetos</h1>
      <h2> Destructuring y Spread</h2>
      <main className='main'>
        <p>Mira la consola de las devTools</p>
      </main>
    </div>
  );
}

export default App;