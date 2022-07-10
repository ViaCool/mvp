import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import deBlack from "../../images/data_exploration_black_24dp 1.svg";
import seBlack from "../../images/settings_black_24dp 1.svg";
import logo from "../../images/logo.svg";
import { OrganizationContext } from "../../context/OrganizationContext";

const pages = [
  {
    id: 234,
    icon: deBlack,
    name: "Predict",
    url: "/predict",
  },
  {
    id: 481,
    icon: seBlack,
    name: "Settings",
    url: "/settings",
  },

];

function Aside() {
  const location = useLocation();
  const { clearFiles, setReport, setFilesResponse } =
    useContext(OrganizationContext);

  const navigate = useNavigate();
  return (
    <aside className="bg-white w-[220px] h-screen fixed left-0 top-0 bottom-0">
      <div className="p-6">
        <Link to="/">
          <img className="w-[174px]" src={logo} alt="" />
        </Link>
      </div>
      <hr className="border-t border-dark border-opacity-10 mx-12 mb-12" />
      <ul className="list-none">
        {pages.map(({ id, icon, url, name }) => (
          <li key={id}>
            <Link
              to={url}
              className={`px-9 py-3 block hover:no-underline hover:bg-gressgreen duration-200 ${
                url === location.pathname ? "bg-gressgreen font-bold" : ""
              }`}
            >
              <span
                className={`flex gap-4 items-center duration-100 hover:opacity-100 ${
                  url === location.pathname ? "" : "opacity-50"
                }`}
              >
                <img className="w-6 h-6" src={icon} alt="" />
                <span className="text-h3 tracking-normal">{name}</span>
              </span>
            </Link>
          </li>
        ))}
        <li
          className="px-9 py-3 block hover:no-underline hover:bg-gressgreen duration-200"
          onClick={() => {
            localStorage.clear();
            setFilesResponse([]);
            clearFiles();
            setReport([]);
            navigate("/login");
          }}
        >
          <span
            className={`flex gap-4 ml-1 items-center opacity-50 duration-100 hover:opacity-100`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ">
              <path d="M17 7.908H8v4h9V14l4-4.043-4-4.043v1.994z" />
              <path d="M13.919 6.908V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15.908a2 2 0 0 0 2 2h9.919a2 2 0 0 0 2-2v-5h-6.87v-6z" />
            </svg>
            <span className="text-h3 tracking-normal ">Logout</span>
          </span>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
