import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "Recipe Pantry",
      category: "group",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",

      githublink: "https://github.com/charliebear2000/Food-andDrink-DB",
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
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://secure-taiga-31332.herokuapp.com/notes",
    },
    {
      name: "Burrito",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://ckoehler16.github.io/Cocktail-Generator/",
    },
    {
      name: "Scallop pasta",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://shrouded-gorge-64455.herokuapp.com/",
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
          //make image a link
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
export default PhotoList;
// ${category}/${i}.jpg`).default}
