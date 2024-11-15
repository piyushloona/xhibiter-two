import header from "../Assets/Icons/header_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Person2Icon from "@mui/icons-material/Person2";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { Link } from "react-router-dom";
const Navbar = () => {  
  function back(){
    var element=document.body;
    element.classList.toggle("back_bg");
  }
  return (
    <div className="header">
      <nav className="navbar navbar-expand-xl fixed-top p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={header} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <div className="input_list">
              <div className="icon">
                <SearchIcon className="search_icon" />
                <input type="text" placeholder="Search" className="search" />
              </div>
              <ul>
                <li>
                  <a href="/">Home</a>
                  {/* <div className="menu_list">
                    <li className="drop down-item">
                      <a href="#">Home 01</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Home 02</a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">Home 03</a>
                    </li>
                  </div> */}
                </li>
                <li>
                  <a href="/">Pages</a>
                </li>
                <li>
                  <Link to="/Resources">Resources</Link>
                </li>
                <li>
                  <Link to="/Register"  >Register</Link>
                </li>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
              </ul>
            </div>

            <div className="end">
              <TouchAppIcon className="hand_icon" />
              <Link to="/admin"><Person2Icon className="profile_icon" /></Link>
              <BrightnessHighIcon className="brightness_icon"  onClick={() => {
              back();
            }}/>
            </div>
          </div>
        </div>
      </nav>

     
    </div>
  );
};
export default Navbar;
