const ImageCard = ({ id, url, title, changeSeledtedImage }) => {

  return (
    <li className="flower" id={id} onClick={() => changeSeledtedImage({ id, url, title })}>
      <img className="flower__image" src={url} alt={title} />
      <p>{title}</p>
    </li>
  );
};

export default ImageCard;
