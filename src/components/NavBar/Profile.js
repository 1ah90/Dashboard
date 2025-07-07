import ArrowIcon from '../icons/ArrowIcon';
import { useState } from 'react';
import { Link  } from 'react-router-dom';
// import './DropdownStyle.css';

const profileOptions = [
  { option: 'Home' , path :  "/"},
  { option: 'Profile' , path :  "/"},
  { option: 'Sitting ' , path :  "/"},
  { option: 'Dashbaord', path :  "/Hero"},
];
const arrayProfileOpition = profileOptions.map((item, i) => (
  <Link to={item.path}>
  <li key={i} className="px-10 py-2 text-left hover:text-black">
    {item.option}
  </li>
  </Link>
));

function Profile() {
  // social monitoring dropdown
  const [linkProfile, setLinkProfile] = useState(false);

  return (
    <div
      className=" text-gray cursor-pointer  "
      // event to check if dropdown open or not
      onClick={() => {
        setLinkProfile((linkProfile) => !linkProfile);
      }}
    >
      <div className="gap-4 bg-white hover:text-black rounded-xl flex items-center relative- p-2 px-3   ">
        <img className="w-[35px]" alt="profileLogo" src="image copy.png" />
        <h5>Ahmad</h5>
        <ArrowIcon />
      </div>
      {/* dropdown */}
      <ul className="absolute  bg-white rounded-xl w-52 z-50 shadow-custom mt-2  ">
        {linkProfile && arrayProfileOpition}
      </ul>
    </div>
  );
}
export default Profile;
