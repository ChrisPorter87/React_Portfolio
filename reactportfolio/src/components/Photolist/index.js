import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "Recipe Pantry",
      category: "group",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Flute and Fork",
      category: "group",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",
      category: " group",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",
      category: " group",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cat green eyes",
      category: " portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Green parrot",
      category: " portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: " Yellow macaw",
      category: " portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Pug smile",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "ExpressNoteTaker",
      category: "solo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Burrito",
      category: "solo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Scallop pasta",
      category: "solo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Burger",
      category: "solo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Fruit bowl",
      category: "solo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};
export default PhotoList;
// ${category}/${i}.jpg`).default}
