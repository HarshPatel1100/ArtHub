import {NavLink} from "react-router-dom";

function List({goto, content}) {
  return (
    <li>
      <NavLink
        to={goto}
        className={({isActive}) =>
          `${isActive ? "text-secondary" : "text-white"}`
        }
      >
        {content}
      </NavLink>
    </li>
  );
}

export default List;
