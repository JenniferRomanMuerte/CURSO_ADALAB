import {useParams} from "react-router";

const BookDetails = ({allBooks}) => {
   const {id}  = useParams();
   const book = allBooks.find((book => book.id === parseInt(id)));
  return (
    <section>
      <div className={"book " +(book.read && "book--read")} key ={book.id}>
         <img
                src={book.image}
                alt="Portada del libro Frankenstein"
                className="book__image"
              />
              <div className="book__info">
                <h3 className="book__title">{book.title}</h3>
                <p className="book__author">{book.author}</p>
                <p className="book__year">{book.year}</p>
                <button className={"book__status" + (book.read ? "book__status--read" : "book__status--pending")}>
                  {book.read ? "Leido" : "Pendiente"}
                </button>
              </div>
      </div>
    </section>


  );
};

export default BookDetails;