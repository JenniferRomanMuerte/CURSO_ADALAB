function InputGroupCheck({
  labelText,
  inputName,
  inputId,
  checked,
  handleChange,
}) {
  const handleInputRadioChange = (ev) => {
    handleChange(ev.target.checked);
  };
  return (
    <div className="input-group-checkbox">
      <label className="label-check" htmlFor={inputId}>
       {labelText}
      </label>
      {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
      <input
        type="checkbox"
        name={inputName}
        id={inputId}
        checked={checked}
        onChange={handleInputRadioChange}
      />
    </div>
  );
}

export default InputGroupCheck;
