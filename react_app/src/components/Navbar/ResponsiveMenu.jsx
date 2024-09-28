import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { DropdownLinks } from "./Navbar";
import Logo from "../../assets/logo.png";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
      setShowDropdown(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md overflow-y-auto`}
    >
      <div className="card">
        <div className="flex items-center justify-between gap-3">
          {" "}
          <img src={Logo} className="h-16 w-auto " alt="Logo" />
          <button onClick={() => setShowMenu(false)} className="ml-auto">
            ✖️
          </button>
        </div>
        <nav className="mt-8">
          <ul className="items-center gap-6 pt-2 ">
            <li className="pb-5">
              <NavLink
                to="/"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                About Us
              </NavLink>
            </li>
            <li className="group relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center h-[72px] gap-2"
              >
                Services
                <FaCaretDown
                  className={`transition-transform duration-200 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showDropdown && (
                <div className="absolute z-[9999] w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <NavLink
                          to={data.link}
                          onClick={() => setShowMenu(false)} // Close menu on link click
                          className="block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/contact-us"
                activeClassName="active"
                onClick={() => setShowMenu(false)}
              >
                Contact Us
              </NavLink>
              <li className="py-5">
                <NavLink to="/feedback" activeClassName="active">
                  FeedBack
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/sitemap" activeClassName="active">
                  SiteMap
                </NavLink>
              </li>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h6>Made with MSG-Futurists</h6>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
