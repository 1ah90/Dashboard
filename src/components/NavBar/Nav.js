import ArrowIcon from '../icons/ArrowIcon';
import { useState } from 'react';
import LogoWithLinks from './LogoWithLinks';
import Profile from './Profile';
import Search from './SearchInput';

const linksArray = [
  {
    key: 1,
    href: '#',
    name: 'Social Monitoring',
    active: 'active',
    dropdown: [
      { key: 1, monitor: 'option1' },
      { key: 2, monitor: 'option2' },
      { key: 3, monitor: 'option3' },
    ],
  },
  {
    key: 2,
    href: '#',
    name: 'Social',
    active: '',
    dropdown: [
      { key: 1, monitor: 'facebook' },
      { key: 2, monitor: 'instagram' },
      { key: 3, monitor: 'youtube' },
    ],
  },
  {
    key: 3,
    href: '#',
    name: 'Social Monitoring',
    active: '',
    dropdown: [
      { key: 1, monitor: 'item1' },
      { key: 2, monitor: 'item2' },
      { key: 3, monitor: 'item3' },
    ],
  },
];

function NavBar() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const links = linksArray.map((link, i) => (
    <li
      key={link.key}
      className={`rounded-xl bg-white text-gray relative ${
        link.active ? 'text-purple-dark' : ''
      }`}
      onClick={() =>
        setOpenDropdownIndex((navLinksDropdown) => (navLinksDropdown === i ? null : i))
      }
    >
      <a href={link.href} className="flex items-center p-3 hover:text-black">
        {link.name}
        <ArrowIcon />
      </a>

      {openDropdownIndex === i && (
        <ul className="absolute mt-2 bg-white rounded-xl w-52 z-50 shadow-custom">
          {link.dropdown.map((item) => (
            <li
              className="cursor-pointer hover:text-black py-2 px-4"
              key={item.key}
            >
              {item.monitor}
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  return (
    <nav className="flex justify-between flex-wrap py-4 w-full z-50 items-stretch h-13">
      <LogoWithLinks listLinks={links} />
      <div className="profile flex gap-3 items-stretch">
        <Search />
        <Profile />
      </div>
    </nav>
  );
}

export default NavBar;
