import React, { useState } from "react";

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: "ExpressNoteTaker",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://secure-taiga-31332.herokuapp.com/notes",
      githublink: "https://github.com/ChrisPorter87/ExpressNoteTaker",
    },
    {
      name: "Cocktail generator",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://ckoehler16.github.io/Cocktail-Generator/",
      githublink: "https://github.com/ckoehler16/Cocktail-Generator",
    },
    {
      name: "Food and Drink DB",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://shrouded-gorge-64455.herokuapp.com/",
      githublink: "https://github.com/charliebear2000/Food-andDrink-DB",
    },
    {
      name: "Weather Dashboard",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://chrisporter87.github.io/WeatherAssignment/",
      githublink: "https://github.com/ChrisPorter87/WeatherAssignment",
    },
    {
      name: "Work day scheduler",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
      link: "https://chrisporter87.github.io/Work-Day-Scheduler/",
      githublink: "https://github.com/ChrisPorter87/Work-Day-Scheduler",
    },
    {
      name: "Code quiz",
      category: "portfolio",
      description: " A coding quiz created with javascript and jquery",
      link: "https://chrisporter87.github.io/Code-Quiz/",
      githublink: "https://github.com/ChrisPorter87/Code-Quiz",
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          //make image a link
          <div className="col-md-6 col-sm-12 col-lg-4 text-center">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../../assets/small/${category}/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            </a>
            <a
              href={image.githublink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhotoList;
