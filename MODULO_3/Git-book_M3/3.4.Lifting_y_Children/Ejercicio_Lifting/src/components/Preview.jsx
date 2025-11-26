function Preview({name, email, region, legalTerms,  paymentType}) {

   // Funciones que nos ayudan a renderizar
  const renderPaymentTypeText = () => {
    if (paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (paymentType === "cash") {
      return "Efectivo";
    } else if (paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };

  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {name}</li>
        <li>Email: {email}</li>
        <li>Región: {region}</li>
        <li>Método de pago: {renderPaymentTypeText()}</li>
        <li>
          Has aceptado nuestros términos legales:{" "}
          {legalTerms === true ? "Sí" : "No"}
        </li>
      </ul>
    </div>
  );
}

export default Preview;