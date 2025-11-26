import "../styles/Modal.scss";
const Modal = ({ closeModal, children }) => {
  const handleClose = (ev) => {
    ev.stopPropagation(); // Evita que se cierre al hacer click dentro
    closeModal();
  };

  return (
    <article className="modal">
      <div className="modalOverlay"></div>
      <section className="modal__content">
        {children}
        <button className="modal__content--btn" onClick={handleClose}>
          X
        </button>
      </section>
    </article>
  );
};

export default Modal;
