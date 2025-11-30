import { Link } from "react-router";

const BookItem = ({id, title,author,year,image,read}) => {
  return (

    <Link to = {`/book/${id}`}>
      <li className={"book " +(read && "book--read")} key={id}>
              <img
                src={image}
                alt="Portada del libro Frankenstein"
                className="book__image"
              />
              <div className="book__info">
                <h3 className="book__title">{title}</h3>
                <p className="book__author">{author}</p>
                <p className="book__year">{year}</p>
                <button className={"book__status" + (read ? "book__status--read" : "book__status--pending")}>
                  {read ? "Leido" : "Pendiente"}
                </button>
              </div>
            </li>
    </Link>
  );
};

export default BookItem;