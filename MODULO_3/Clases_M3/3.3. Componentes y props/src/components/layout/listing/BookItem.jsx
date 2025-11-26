const BookItem = ({index,title,author,year,image,read}) => {
  return (
    <>
      <li className={"book " +(read && "book--read")} key={index}>
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
    </>
  );
};

export default BookItem;