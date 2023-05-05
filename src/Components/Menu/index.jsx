import React from "react";
import { Link, NavLink } from "react-router-dom";

const routes = [];
routes.push({
  to: "/",
  text: "home",
});
routes.push({
  to: "/blog",
  text: "Blog",
});
routes.push({
  to: "/profile",
  text: "Profile",
});
export const Menu = () => {
  return (
    <div>
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.to}>
              <NavLink
                //className={({isActive})=>''}
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
        {/*
        Todo esto es evitado trabajando con array y objetos con un poco de logica. De esta manera la cantidad de lineas
        de codigo que vamos a escribir.
         {<li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>} */}
        {/* {<li>
          <NavLink
            //className={({isActive})=>''}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>} */}
      </ul>
    </div>
  );
};
