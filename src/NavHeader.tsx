import { NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import { useAuth } from "./security/AuthProvider";

export default function NavHeader() {
  const auth =useAuth()
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* <a href="/categories">Categories</a> */}
          {/* <Link to="/categories">Categories</Link> */}
          <NavLink to="/categories">Categories</NavLink>

        </li>
        <li>
          {/* <a href="/recipes">Recipes</a> */}
          {/* <Link to="/recipes">Recipes</Link> */}
          <NavLink to="/recipes">Recipes</NavLink>

        </li>
   {  auth.isLoggedInAs("ADMIN") && (
    <li>
    {/* <a href="/add">Add</a> */}
    {/* <Link to="/add">Add</Link> */}

    <NavLink to="/add">Add</NavLink>

  </li>)}

     
        <li>
          {/* <a href="/contact">Contact</a> */}
          {/* <Link to="/contact">Contact</Link> */}
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
