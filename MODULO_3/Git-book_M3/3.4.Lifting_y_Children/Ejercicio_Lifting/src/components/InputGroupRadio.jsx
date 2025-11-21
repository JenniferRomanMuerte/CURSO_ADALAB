function InputGroupRadio({
  labelText,
  inputName,
  inputId,
  inputValue,
  paymentType,
  handleChange,
}) {
  const handleInputRadioChange = (ev) => {
    handleChange(ev.target.value);
  };
  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        type="radio"
        name={inputName}
        id={inputId}
        value={inputValue}
        checked={paymentType == inputValue}
        onChange={handleInputRadioChange}
      />
    </div>
  );
}

export default InputGroupRadio;
