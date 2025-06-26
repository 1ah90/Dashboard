import Search from '../NavBar/SearchInput';
import ArrowIcon from '../icons/ArrowIcon';
import CalenderIcon from '../icons/CalenderIcon';
import AddIcon from '../icons/addIcon';
function HereNav() {
  return (
    <div className="flex heroNav ">
      {/* input and title  box */}
      <div className="flex box1">
        <div className="text" style={{ textAlign: 'left' }}>
          <h2>Monitor</h2>
          <p>To Add Moniton</p>
        </div>
        <Search
          style={{ border: '1px solid #8690a0' }}
          PlaceHolderName="Search monitors.."
        />
      </div>
      {/* button and calender box  */}
      <div className="flex box2">
        <div className="calender flex">
          <CalenderIcon />
          <span>Days</span>
          <ArrowIcon />
        </div>
        <button className="flex mainBtn">
          <AddIcon /> New Moniton
        </button>
      </div>
    </div>
  );
}

export default HereNav;
