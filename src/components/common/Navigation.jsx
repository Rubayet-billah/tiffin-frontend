import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/thunkApi/thunkApi";
import userAvatar from "../../assets/userAvatar.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); // Get the dispatch function

  const menu = (
    <>
      <li>
        <a></a>
      </li>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 1</a>
      </li>
    </>
  );

  // Define a function to handle user logout
  const logoutHandler = () => {
    dispatch(logoutUser()); // Dispatch the logoutUser action
  };

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost upper-case text-2xl font-bold">
          Tiffin
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="lg:flex items-center gap-2">
            <div className="items-center gap-1 hidden md:flex">
              <span>{user?.email}</span>
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={userAvatar} />
                </div>
              </div>
            </div>
            <button onClick={logoutHandler} className="btn btn-warning">
              Log out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
