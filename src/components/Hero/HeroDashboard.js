import { useState } from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import './HeroStyle.css';
// info to creat table body row
const data = [
  {
    id: 'e97654-1',
    creator: 'ALI',
    icon: 'image copy 2.png',
    type: 'KEYWFED',
    creationDate: '6/1/2025',
    monitoredPosts: 54,
    historicalData: 54,
    status: 'NOT CONFIGURED',
  },
  {
    id: 'e97654-3',
    creator: 'ALI',
    icon: 'image copy 2.png',
    type: 'KEYWFED',
    creationDate: '6/1/2025',
    monitoredPosts: 555,
    historicalData: 555,
    status: 'CONFIGURED',
  },
  {
    id: 'e97654-6',
    creator: 'ALI',
    icon: 'image copy 3.png',
    type: 'KEYWFED',
    creationDate: '6/1/2025',
    monitoredPosts: 4,
    historicalData: 4,
    status: 'CONFIGURED',
  },
];

function DashboardTable() {
  const [Open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!Open);
  }

  return (
    <div>
      <table className="dashboard-table">
        {/* head row  */}
        <thead>
          <tr>
            <th>ID</th>
            <th>CREATOR</th>
            <th className="flex">
              DATA SOURCES <ArrowIcon />
            </th>
            <th>TYPE</th>
            <th className="flex">
              CREATION DATE <ArrowIcon />
            </th>
            <th>MONITORED POSTS</th>
            <th>HISTORICAL DATA</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        {/* body row  */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="id">{item.id}</td>
              <td>{item.creator}</td>
              <td>
                <img src={item.icon} alt="icon" width="20" />
              </td>
              <td>
                <span className="type">{item.type}</span>
              </td>
              <td>{item.creationDate}</td>
              <td>{item.monitoredPosts}</td>
              <td>{item.historicalData}</td>
              <td>
                <span
                  className={
                    item.status === 'CONFIGURED'
                      ? 'status configured'
                      : 'status not-configured'
                  }
                >
                  {item.status}
                </span>
              </td>
              <td>
                <button onClick={toggleMenu} className="options-button">
                  ⋮
                </button>
              </td>
              {Open && (
                <div className="menuDropdown">
                  <p> Historical Data</p>
                  <p>Custom Dashboard</p>
                  <p className="delete">Delete</p>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;
