import './NavStyle.css';
import Search from './SearchInput';
import ArrowIcon from '../icons/ArrowIcon';

//link data
const linksArray = [
  {
    key: 1,
    href: '#',
    name: 'Social Monitoring',
    className: 'flex',
    active: 'active',
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
// loop to create links section
const links = linksArray.map((link) => {
  return (
    <li key={link.key} className={link.active || ''}>
      <a href={link.href} className={link.className}>
        {link.name}
        <ArrowIcon />
      </a>
    </li>
  );
});

function NavBar() {
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
        <div className="profileContainer flex">
          <img
            alt="profileLogo"
            src="image copy.png"
            style={{ width: '35px' }}
          />
          <h5>Ahmad</h5>
          <ArrowIcon />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
