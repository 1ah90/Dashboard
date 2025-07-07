import { useState } from 'react';
import ArrowIcon from '../../components/icons/ArrowIcon';
import './HeroStyle.css';
import TrachIcon from '../../components/icons/TrashIcon';

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
    dropdown: [
      { key: 1, option: 'Histrical Data' },
      { key: 2, option: 'Custom Dashboard' },
      { key: 3, option: 'Delete', icon: <TrachIcon /> },
    ],
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
    dropdown: [
      { key: 1, option: 'Data' },
      { key: 2, option: 'Monitor' },
      { key: 3, option: 'Delete', icon: <TrachIcon /> },
    ],
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
    dropdown: [
      { key: 1, option: 'Custom Dashboard' },
      { key: 2, option: 'Delete', icon: <TrachIcon /> },
    ],
  },
];

function DashboardTable() {
  const [dashBoardData, setDashBoardData] = useState(data);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // for delete table row
  function handleDelete(id) {
    const updated = dashBoardData.filter((d) => d.id !== id);
    setDashBoardData(updated);
    setOpenDropdownIndex(null); 
  }

  function toggleDropdown(index) {
    setOpenDropdownIndex((monitorDropdown) => (monitorDropdown === index ? null : index));
  }

  return (
    <div>
      <table className="dashboard-table w-full border-separate border-spacing-0 rounded-xl text-[14px] mt-5 bg-white relative">
        <thead>
          <tr>
            <th className="rounded-s-lg">ID</th>
            <th>CREATOR</th>
            <th className="flex">DATA SOURCES <ArrowIcon /></th>
            <th>TYPE</th>
            <th className="flex">CREATION DATE <ArrowIcon /></th>
            <th>MONITORED POSTS</th>
            <th>HISTORICAL DATA</th>
            <th>STATUS</th>
            <th className="rounded-e-lg"></th>
          </tr>
        </thead>
        <tbody>
          {dashBoardData.map((item, i) => (
            <tr key={item.id}>
              <td className="id text-purple">{item.id}</td>
              <td>{item.creator}</td>
              <td><img src={item.icon} alt="icon" width="20" /></td>
              <td>
                <span className="type text-purple bg-purple bg-opacity-20 px-2 py-1 rounded-xl">
                  {item.type}
                </span>
              </td>
              <td>{item.creationDate}</td>
              <td>{item.monitoredPosts}</td>
              <td>{item.historicalData}</td>
              <td>
                <span className={`${
                    item.status === 'CONFIGURED'
                      ? 'border-green-500 text-green-500 bg-green-500'
                      : 'border-gray text-gray bg-gray'
                  } bg-opacity-10 border-2 text-center block p-1 w-fit rounded-xl`}>
                  {item.status}
                </span>
              </td>
              <td className="relative">
                <button onClick={() => toggleDropdown(i)}>
                  <span>⋮</span>
                </button>
                {console.log(i)}
                {openDropdownIndex === i && (
                  <ul className="absolute right-10 bg-white rounded-xl w-52 z-50 shadow-custom">
                    {item.dropdown.map((opt) => {
                      const isDelete = opt.option === 'Delete';
                      return (
                        <li
                          key={opt.key}
                          onClick={() => {
                            if (isDelete) handleDelete(item.id);
                          }}
                          className={`flex px-5 py-3 text-left gap-3 font-medium text-gray hover:text-black cursor-pointer ${
                            isDelete ? 'text-red-600 hover:text-red-700' : ''
                          }`}
                        >
                          <span>{opt.option}</span>
                          <span>{opt.icon}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;
