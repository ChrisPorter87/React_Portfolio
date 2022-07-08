import React from "react";
// import { RiReactjsFill } from "react-icons/ri";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;
  return (
    <header className="flex-row px-1">
      <h4>
        {/* <img alt="react logo">
          <RiReactjsFill className="icon" />
        </img> */}
        <a data-testid="link" href="/">
          Chris Porter React Portfolio
        </a>
      </h4>
      <nav>
        <ul className="flex-row">
          <li>
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span
              onClick={() => {
                setContactSelected(true);
              }}
            >
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
