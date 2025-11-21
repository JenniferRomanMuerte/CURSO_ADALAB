function InputGroupSelect({
  labelText,
  inputName,
  inputId,
  InputValue,
  options,
  handleChange
}){

  const handleInputSelectChange = (ev) =>{
    handleChange(ev.target.value);
  }
  return(
    <div className="input-group-select">
            <label className="label-text" htmlFor={inputId}>
              {labelText}
            </label>
            <select
              className="input-select"
              name={inputName}
              id={inputId}
              value={InputValue}
              onChange={handleInputSelectChange}
            >
              <option>{options[0]}</option>
              <option>{options[1]}</option>
              <option>{options[2]}</option>
              <option>{options[3]}</option>
              <option>{options[4]}</option>
            </select>
          </div>
  );
}

export default InputGroupSelect;