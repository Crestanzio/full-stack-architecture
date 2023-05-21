import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/features/userSlice";
import { HOME } from "../../constants/routes";
import "./navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.user);
  const activeLinkClass = ({ isActive }) => (isActive ? "active" : "");
  const _logout = () => dispatch(logout());

  return (
    <header>
      <nav>
        <NavLink to={HOME} className={activeLinkClass}>Home</NavLink>
        {success ? <Link onClick={_logout}>Logout</Link> : null}
      </nav>
    </header>
  );
}

export default Navbar;
