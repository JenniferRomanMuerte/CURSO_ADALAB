import "../../styles/Modal.scss";

const Modal = ({url,title,changeSeledtedImage}) => {
  return (
    <section className="modal">
    <div className="modal__overlay"></div>
       <div className="flower" >
       <button className="modal__close"  onClick={() => changeSeledtedImage(null)}>X</button>
      <img
        className="flower__image"
        src={url}
        alt={title}
      />
      <p>{title}</p>
    </div>
    </section>
  );
};

export default Modal;