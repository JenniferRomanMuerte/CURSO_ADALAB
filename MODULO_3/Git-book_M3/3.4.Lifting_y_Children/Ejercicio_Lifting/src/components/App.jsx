// Fichero src/components/App.jsx
import "../styles/App.scss";

// Fichero src/components/App.jsx
import { useState } from "react";

import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupCheck from "./InputGroupCheck";
import Button from "./Button";

const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos

  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
     ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          <InputGroupText
            labelText="Escribe un nombre:"
            inputName="name"
            inputId="name"
            inputPlaceholder="María García"
            inputValue={name}
            handleChange={handleName}
          />
          <InputGroupText
            labelText="Escribe un email:"
            inputName="email"
            inputId="email"
            inputPlaceholder="mariagarcia@gmail.com"
            inputValue={email}
            handleChange={handleEmail}
          />
          <InputGroupSelect
            labelText="Indica tu región:"
            inputName="region"
            inputId="region"
            inputValue={region}
            options={[
              "España peninsular",
              "Islas Canarias",
              "Islas Baleares",
              "Ceuta",
              "Melilla",
            ]}
            handleChange={handleRegion}
          />

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <InputGroupRadio
            labelText="Tarjeta de crédito"
            inputName="paymentType"
            inputId="creditCard"
            inputValue="creditCard"
            paymentType={paymentType}
            handleChange={handlePaymentType}
          />
          <InputGroupRadio
            labelText="Efectivo"
            inputName="paymentType"
            inputId="cash"
            inputValue="cash"
            paymentType={paymentType}
            handleChange={handlePaymentType}
          />

          <InputGroupRadio
            labelText="Contra reembolso"
            inputName="paymentType"
            inputId="cashOnDelivery"
            inputValue="cashOnDelivery"
            paymentType={paymentType}
            handleChange={handlePaymentType}
          />
          <InputGroupCheck
            labelText="Debes aceptar nuestros términos legales para completar la compra:"
            inputName="legalTerms"
            inputId="legalTerms"
            checked={legalTerms}
            handleChange={handleLegalTerms}
          />
        </div>
        <Preview
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          legalTerms={legalTerms}
        />
        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <Button
          textButton = "Enviar"
          type="submit"
          disabled={isValidForm() === false}
        />

        {/* send */}
        <Button
          textButton = "Limpiar el formulario"
          handleButton = {handleResetButton}

        />
      </form>
    </div>
  );
};

export default App;
