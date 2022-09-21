import React, { useEffect, useState } from "react";
import GifItem from "./GifItem";
import { getGifs } from "../helpers/getGifs";
import Loading from './Loading'

const GifGrid = ({ category }) => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setLoading(false)
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
    {
      loading && (<Loading />) 
    }
    <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
