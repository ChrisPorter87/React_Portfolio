import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "ExpressNoteTaker",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://secure-taiga-31332.herokuapp.com/notes",
    },
    {
      name: "Cocktail generator",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://ckoehler16.github.io/Cocktail-Generator/",
    },
    {
      name: "Food and Drink DB",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://shrouded-gorge-64455.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://chrisporter87.github.io/WeatherAssignment/",
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
