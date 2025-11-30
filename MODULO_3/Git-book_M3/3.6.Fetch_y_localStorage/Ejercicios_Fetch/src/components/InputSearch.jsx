const InputSearch = ({ setSearchName }) => {
  const handleInput = (ev) => {
    setSearchName(ev.target.value);
  };
  return (
    <form>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Escribe la serie que quieres buscar.."
        onInput={handleInput}
      />
    </form>
  );
};

export default InputSearch;
