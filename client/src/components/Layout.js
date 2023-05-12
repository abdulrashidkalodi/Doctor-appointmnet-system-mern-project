import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // =========== doctor menu ===============
  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appintment",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },

    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];
  // =========== doctor menu ===============

  // redering menu list
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;
  return (
    <>
      {/* start nav bar */}
      {/* end nav bar */}
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="row">
              <div
                className="col-logo"
                style={{
                  marginRight: "50px",
                }}
              >
                <img
                  style={{
                    width: "75px",
                    height: "auto",
                    marginLeft: "30px",
                  }}
                  src="https://www.aryavaidyasala.com/images/avs-logo.png"
                  alt="not_found_icon"
                />
                <h6
                  style={{
                    textAlign: "center",
                  }}
                >
                  HOSPITEL <br /> APPOINTMENT
                </h6>
              </div>
              <div className="col">
                {SidebarMenu.map((menu) => {
                  const isActive = location.pathname === menu.path;
                  return (
                    <>
                      <div className={` menu-item ${isActive && "active "}`}>
                        <i className={menu.icon}></i>
                        <Link to={menu.path}>{menu.name}</Link>
                      </div>
                    </>
                  );
                })}

              </div>
              <div className="col-content">
                <div className="header">
                  <div className="header-content" style={{ cursor: "pointer" }}>
                    <Badge
                      count={user && user.notifcation.length}
                      onClick={() => {
                        navigate("/notification");
                      }}
                    >
                      <i className="fa-solid fa-bell"></i>
                    </Badge>

                    <Link to="/profile">{user?.name}</Link>
                  </div>
                </div>
                <br />

                <div onClick={handleLogout}>
                  <Link to="/login">
                    <button id="logoutbtn" type="submit">
                      Logout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
