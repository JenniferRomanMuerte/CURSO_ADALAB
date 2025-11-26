function Button({textButton, handleButton, disabled = false, type = "button"}) {
  const handleChangeButton = () => {
     if (type === "submit") {
      // Los botones submit no necesitan handleButton
      return;
    }
    handleButton?.();  // ← solo se ejecuta si existe
  };
  return (
    <button
    className="button reset"
    type = {type}
    disabled = {disabled}
    onClick={handleChangeButton}>
      {textButton}
    </button>
  );
}

export default Button;
