function InputGroupText({
  labelText,
  inputName,
  inputId,
  inputPlaceholder,
  inputValue,
  handleChange
}) {

  const handleInputChange = (ev) =>{
    handleChange(ev.target.value);
  }

  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        className="input-text"
        type="text"
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputGroupText;
