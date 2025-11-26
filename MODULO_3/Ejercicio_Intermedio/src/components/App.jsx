// Fichero src/components/App.jsx
import { useState } from "react";
import "../styles/App.scss";
import Header from "./layout/Header";
import Form from "./Form";
import Modal from "./listing/Modal";
import ListImages from "./listing/ListImages";

const initialImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    title: "Flores rosas",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    title: "Flores blancas",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    title: "Flores amarillas",
  },
];
function App() {
  const [images, setImages] = useState(initialImages);
  const [searchInput, setSearchInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const filterInput = (value) => {
    console.log(value);
    setSearchInput(value);
  };

  const changeSeledtedImage = (imageObject) => {
    setSelectedImage(imageObject);
  };


  return (
    <div>
      <Header />
      <main className="main">
        <Form filterInput={filterInput} />
        <ListImages
          images={images}
          searchInput={searchInput}
          changeSeledtedImage={changeSeledtedImage}
        />

        {selectedImage && (
          <Modal url={selectedImage.url} title={selectedImage.title} changeSeledtedImage={changeSeledtedImage}/>
        )}
      </main>
    </div>
  );
}

export default App;
