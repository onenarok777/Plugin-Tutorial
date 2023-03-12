import { useState } from "react";
import "../assets/css/sideBar.css";
import { useLocation, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "react-bootstrap";

const SideBar = ({ isMobile, listMenu }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname.replace(listMenu.pathMain + "/", "");
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div
      className={
        isMobile
          ? showMenu
            ? "sidebar-mobile-on"
            : "sidebar-mobile-off"
          : "sidebar-desktop"
      }
    >
      {isMobile ? (
        <div>
          <Navbar style={{ height: 50 }}>
            <Navbar.Brand style={{ color: "#3645ef" }}>
              {listMenu.title}
            </Navbar.Brand>
            <div
              className="button-side-off"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FontAwesomeIcon
                style={{ color: "#3645ef" }}
                icon={showMenu ? faChevronLeft : faChevronRight}
              />
            </div>
          </Navbar>
        </div>
      ) : null}
      <div>
        {listMenu.list.map((mpMenu, i) => {
          return (
            <div
              key={i}
              className={
                mpMenu.path == location ? "menu-active menu-list" : "menu-list"
              }
              onClick={() => navigate(mpMenu.path)}
            >
              {mpMenu.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideBar;
