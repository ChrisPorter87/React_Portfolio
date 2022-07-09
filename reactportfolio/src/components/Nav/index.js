import React from "react";
// import { RiReactjsFill } from "react-icons/ri";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { RiReactjsFill } from "react-icons/ri/";
function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;
  return (
    <header className="flex-row px-1">
      <h4>
        {/* <img alt="react logo">
          <RiReactjsFill className="icon" />
        </img> */}
        <a data-testid="link" href="/">
          Chris Porter React Portfolio
          <RiReactjsFill />
        </a>
      </h4>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
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
