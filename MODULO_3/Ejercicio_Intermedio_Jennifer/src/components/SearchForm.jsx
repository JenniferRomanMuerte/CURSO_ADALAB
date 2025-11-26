import "../styles/Form.scss";
const SearchForm = ({changeSearchText}) => {
  const handleText = (ev) =>{
    changeSearchText(ev.target.value);
  }
  return (
    <form className="form">
      <input
      className="form__input"
      type="text"
      name="name"
      id="name"
      placeholder="Escribe la serie a buscar..."
      onInput={handleText}
      />
    </form>
  );
};

export default SearchForm;