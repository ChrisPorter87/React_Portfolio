import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./components/Resume";
function App() {
  const [categories] = useState([
    {
      name: "About me",
      description: "",
    },
    {
      name: "Contact",
      description: "",
    },
    {
      name: "portfolio",
      description:
        "Screenshot photos of projects that I have created individually or as a group. Feel free to click the image and be taken to the project page.",
    },
    {
      name: "Resume",
      description: "",
    },
    // {
    //   name: "landscape",
    //   description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    // },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  function renderPage(category) {
    switch (category.name) {
      case "About me":
        return <About />;
      case "Contact":
        return <ContactForm />;
      case "portfolio":
        return <Gallery currentCategory={category} />;
      case "Resume":
        return <Resume />;
    }
  }
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>{renderPage(currentCategory)}</main>
    </div>
  );
}

export default App;
