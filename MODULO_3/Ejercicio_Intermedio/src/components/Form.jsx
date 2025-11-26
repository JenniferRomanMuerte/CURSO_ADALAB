const Form = ({filterInput}) => {

  const handleInput = (ev) =>{
    filterInput(ev.target.value);
  }

  const handleSubmit  = (ev) =>{
    ev.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="filter">Filtrar por texto:</label>
      <input
        type="text"
        placeholder="Escribe para filtrar"
        name="filter"
        id="filter"
        onInput= {handleInput}
      />
    </form>
  );
};

export default Form;
