import Search from '../../components/NavBar/SearchInput';
import ArrowIcon from '../../components/icons/ArrowIcon';
import CalenderIcon from '../../components/icons/CalenderIcon';
import AddIcon from '../../components/icons/addIcon';
import { Link } from 'react-router-dom';
function HereNav() {
  return (
    <div className="flex justify-between h-12 ">
      {/* input and title  box */}
      <div className="flex items-center gap-3">
        {/* text  */}
        <div className="text text-left">
          <h1 className="text-2xl mb-2">Monitor</h1>
          <p className="text-gray">To Add Moniton</p>
        </div>

        <Search
          className="border-[1px] border-gray rounded-xl h-full"
          PlaceHolderName="Search monitors.."
        />
      </div>
      {/*  */}

      {/* button and calender box  */}
      <div className="flex gap-3">
        {/* calender button  */}
        <div className="calender flex items-center text-gray gap-1 border-[1px] border-gray p-3 rounded-xl">
          <CalenderIcon />
          <span>Days</span>
          <ArrowIcon />
        </div>
        <Link to={"/Monitor"}>
        <button className=" bg-purple-dark hover:bg-purple-600 text-white flex justify-center items-center  rounded-xl p-3">
          <AddIcon /> New Monitor
        </button>
        </Link>
      </div>
    </div>
  );
}

export default HereNav;
