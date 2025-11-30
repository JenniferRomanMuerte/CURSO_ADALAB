const Preview = ({newBookData}) => {
    const { title, author, year, image } = newBookData;
  return (
   <section className="form__preview">
          <p className="form__previewText">Así se verá la tarjeta:</p>
          <li className="book">
            <img
              src={image ? image : "https://placehold.co/200x300/1a1a2e/eee?text=Portada"}
              alt="Portada del libro Título"
              className="book__image"
            />
            <div className="book__info">
              <h3 className="book__title">{title ? title : "Titulo"}</h3>
              <p className="book__author">{author ? author : "La autora"}</p>
              <p className="book__year">{year ? year : "El año"}</p>
              <button className="book__status book__status--pending">
                Pendiente
              </button>
            </div>
          </li>
        </section>
  );
};

export default Preview;