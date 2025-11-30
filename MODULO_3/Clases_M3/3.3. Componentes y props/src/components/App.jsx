import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import BookItem from "./listing/BookItem";
import AddBook from "./listing/AddBook";
import "../styles/App.scss";
import Filter from "./listing/Filter";
import BookDetails from "./listing/BookDetails";

function App() {
  const [formAddVisible, setFormAddVisible] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [newBookData, setNewBookData] = useState({});

  // PETICION FETCH CON USEEFFECT
  useEffect(() => {
    const dataBooksLocalSorage = localStorage.getItem("dataBooksLocalSorage");

    if (dataBooksLocalSorage) {
      const dataBooksLocalSorageParse = JSON.parse(dataBooksLocalSorage);
      setAllBooks(dataBooksLocalSorageParse);
      setBooks(dataBooksLocalSorageParse);
    } else {
      fetch("http://localhost:4000/api/books")
        .then((res) => res.json())
        .then((data) => {
          setAllBooks(data);
          setBooks(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  // GUARDAR DATOS EN LOCALSTORAGE CUANDO CAMBIE EL ARRAY DE LIBROS
  useEffect(() => {
    localStorage.setItem("dataBooksLocalSorage", JSON.stringify(books));
  }, [books]);

  const fetchNewBook = () => {
    fetch("http://localhost:4000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indicamos que enviamos datos en formato JSON
      },
      body: JSON.stringify(newBookData),
    })
      .then((res) => res.json())
      .then((res) => {
        setBooks([...books, res.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderBooks = () => {
    return books.map((book) => {
      return (
        <BookItem
          id={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
          image={book.image}
          read={book.read}
        />
      );
    });
  };

  const addNewBook = (dataNewBook) => {
    setNewBookData(dataNewBook);
  };

  const changeFormVisible = () => {
    setFormAddVisible((prev) => !prev);
  };

  const showFilterBooks = (property, value) => {
    if (!value.trim()) {
      setBooks(allBooks);
      return;
    }

    const booksFilter = allBooks.filter((book) =>
      book[property].toLowerCase().includes(value.toLowerCase())
    );
    setBooks([...booksFilter]);
    renderBooks();
  };

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <Filter showFilterBooks={showFilterBooks} />
              <ul className="books__list">{renderBooks()}</ul>
            </main>
          }
        />
        <Route
          path="/about-us"
          element={
            <div>
              <h2>Sobre Nosotras</h2>
            </div>
          }
        />
        <Route
          path="/add-book"
          element={
            <AddBook
              formAddVisible={formAddVisible}
              addNewBook={addNewBook}
              fetchNewBook={fetchNewBook}
              changeFormVisible={changeFormVisible}
              newBookData={newBookData}
            />
          }
        />

        <Route path="/book/:id" element={<BookDetails allBooks={allBooks} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
