import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupCheck from "./InputGroupCheck";
import Button from "./Button";

function Form({
  name,
  email,
        region,
        paymentType,
        legalTerms,
        handleName,
        handleEmail,
        handleRegion,
        handlePaymentType,
        handleLegalTerms,
        handleResetButton,
        handleForm,
        isValidForm,

}){
    const handleFormForm = (ev) =>{
      ev.preventDefault();
      handleForm();
    }

  return(

    <form className="form" onSubmit={handleFormForm}>
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
  );
}
export default Form;