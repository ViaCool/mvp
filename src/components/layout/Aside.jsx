import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import deBlack from '../../images/data_exploration_black_24dp 1.svg';
import seBlack from '../../images/settings_black_24dp 1.svg';
import logo from '../../images/logo.svg';

const pages = [
  {
    id: 234,
    icon: deBlack,
    name: 'Predict',
    url: '/predict',
  },
  {
    id: 481,
    icon: seBlack,
    name: 'Settings',
    url: '/settings',
  },
  {
    id: 6776,
    icon: deBlack,
    name: 'Demo File Uploaded',
    url: '/demo-uploaded',
  },
  {
    id: 12334,
    icon: deBlack,
    name: 'Demo Upload Progress',
    url: '/demo-upload-progress',
  },
];

function Aside() {
  const location = useLocation();

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
                url === location.pathname ? 'bg-gressgreen font-bold' : ''
              }`}
            >
              <span
                className={`flex gap-4 items-center duration-100 hover:opacity-100 ${
                  url === location.pathname ? '' : 'opacity-50'
                }`}
              >
                <img className="w-6 h-6" src={icon} alt="" />
                <span className="text-h3 tracking-normal">{name}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
