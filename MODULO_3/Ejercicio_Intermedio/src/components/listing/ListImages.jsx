import ImageCard from "./ImageCard";

const ListImages = ({ images, searchInput, changeSeledtedImage }) => {
  return (
    <ul className="gallery">
      {images
        .filter((image) =>
          image.title.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((eachImageObject) => (
          <ImageCard
            key={eachImageObject.id}
            id={eachImageObject.id}
            url={eachImageObject.url}
            title={eachImageObject.title}
            changeSeledtedImage = {changeSeledtedImage}
          />
        ))}
    </ul>
  );
};

export default ListImages;
