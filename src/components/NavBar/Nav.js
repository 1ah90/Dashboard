import './NavStyle.css';
import Search from './SearchInput';
import ArrowIcon from '../icons/ArrowIcon';
import TrachIcon from '../icons/TrashIcon';
import MenuDropdown from '../Dropdown/DropdownItems';
import { useState } from 'react';

//link data
const linksArray = [
  {
    key: 1,
    href: '#',
    name: 'Social Monitoring',
    className: 'flex',
    active: 'active',
    menu: (
      // link options
      <MenuDropdown
        name={[
          { item: 'option-1' },
          { item: 'option-2' },
          {
            item: (
              <div style={{display:'flex' , alignItems:'center', gap:'20px'}}>
                option-3 <TrachIcon />
              </div>
            ),
          },
        ]}
      />
    ),
  },
  {
    key: 2,
    href: '#',
    name: 'Social',
    className: 'flex',
    active: '',
  },
  {
    key: 3,
    href: '#',
    name: 'Social Monitoring',
    className: 'flex',
    active: '',
  },
];

function NavBar() {
  // social monitoring dropdown
  const [linkDropdown, setlinkDropdown] = useState(false);
  // profile click dropdown
  const [linkProfile, setLinkProfile] = useState(false);

  // loop to create links section
  const links = linksArray.map((link) => {
    return (
      <li
        key={link.key}
        className={link.active || ''}
        // event to check if dropdown open or not
        onClick={() => {
          if (link.active == 'active') {
            setlinkDropdown((linkDropdown) => !linkDropdown);
          }
        }}
      >
        <a href={link.href} className={link.className}>
          {link.name}

          <ArrowIcon />
        </a>
        {linkDropdown ? link.menu : null}
      </li>
    );
  });

  return (
    <nav>
      <div className="links flex">
        {/* logo  */}
        <div className="logo">
          <img alt="logo" src="image.png" />
        </div>
        {/* links  */}
        <ul className="linksContainer flex">{links}</ul>
      </div>

      <div className="profile flex">
        {/* search input  */}
        <Search />
        {/* profile data  */}
        <div
          className="containerWithDropdown"
          // event to check if dropdown open or not
          onClick={() => {
            setLinkProfile((linkProfile) => !linkProfile);
          }}
        >
          <div className="profileContainer flex">
            <img
              alt="profileLogo"
              src="image copy.png"
              style={{ width: '35px' }}
            />
            <h5>Ahmad</h5>
            <ArrowIcon />
          </div>
          <ul className="profleDropdown">
            {linkProfile ? (
              <MenuDropdown
                profileOptions={[
                  { option: 'Home' },
                  { option: 'Profile' },
                  {option: 'Sitting',},
                ]}
              />
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
