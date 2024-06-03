import React from "react";
import "./Sidenav.css";

// note how the imported name can be changed relative to the actual
// icon's name given by @mui (e.g., MoreIcon vs MenuOutlineIcon)
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import ReelsIcon from "@mui/icons-material/SlideshowOutlined";
import MessagesIcon from "@mui/icons-material/SendOutlined";
import NotificationsIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CreateIcon from "@mui/icons-material/AddBoxOutlined";
import MoreIcon from "@mui/icons-material/MenuOutlined";

function Sidenav() {
  let url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png";

  return (
    <div className="sidenav">
      <a href="https://www.instagram.com/" alt="link to Instagram">
        <img className="sidenav__logo" src={url} alt="instagram logo" />{" "}
      </a>

      <div className="sidenav__button-container">
        <button className="sidenav__button">
          {/* wrap the @mui icon in its own wrapper div so that the div size
              can remain fixed while the icon is resized on hover, without
              affecting the span's text within the button */}
          <div className="sidenav__icon-wrapper">
            <HomeIcon className="material-icons the-icon" />
          </div>
          <span>Home</span>
        </button>

        <button className="sidenav__button">
          <div className="sidenav__icon-wrapper">
            <SearchIcon className="material-icons the-icon" />
          </div>
          <span>Search</span>
        </button>

        <button className="sidenav__button">
          <div className="sidenav__icon-wrapper">
            <ExploreIcon className="material-icons the-icon" />
          </div>
          <span>Explore</span>
        </button>

        <button className="sidenav__button">
          <div className="sidenav__icon-wrapper">
            <ReelsIcon className="material-icons the-icon" />
          </div>
          <span>Reels</span>
        </button>

        <button className="sidenav__button">
          <div className="sidenav__icon-wrapper">
            <MessagesIcon
              className="material-icons the-icon"
              id="messages-icon"
            />
          </div>
          <span>Message</span>
        </button>

        <button className="sidenav__button">
          <div className="sidenav__icon-wrapper">
            <NotificationsIcon className="material-icons the-icon" />
          </div>
          <span>Notifications</span>
        </button>

        <button className="sidenav__button">
          <div className="sidenav__icon-wrapper">
            <CreateIcon className="material-icons the-icon" />
          </div>
          <span>Create</span>
        </button>
      </div>

      <div className="sidenav__more-container">
        <button className="sidenav__button">
          <div className="sidenav__icon-wrapper">
            <MoreIcon className="material-icons the-icon" />
          </div>
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
