import React,{useState} from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

export default function GifExpertApp() {

  const [categories, setCategories] = useState([]);


  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category, key) => (
          <GifGrid key={key} category={category} />
        ))}
      </ol>
    </div>
  );
}
