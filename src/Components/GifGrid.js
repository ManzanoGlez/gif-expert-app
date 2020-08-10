import React, { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export default function GifGrid({ category }) {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      <div className="card-grid">
        {loading && (
          <h5 className="animate__animated animate__flash">Cargando..</h5>
        )}

        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </Fragment>
  );
}
