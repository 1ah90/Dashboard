import KeywordIcon from '../../components/icons/KeywordIcon';
import ProfileIcon from '../../components/icons/ProfieIcon';
import ScreenIcon from '../../components/icons/ScreenIcon';
import SittingIcon from '../../components/icons/SittingIcon';
import { useState } from 'react';

// header of Monitor page
function HeaderMonitor() {
  return (
    <main className="title flex justify-between items-center ">
      <article className="flex items-center gap-2">
        <span className="bg-purple bg-opacity-15 p-2 rounded-[16px]">
          <ScreenIcon />
        </span>{' '}
        <h2 className="text-[1.3rem] font-bold text-purple ">Monitor Type</h2>
      </article>
      {/* line  */}
      <span className="bg-gray bg-opacity-55 w-7/12 h-[1px] rounded-xl "></span>
      {/* line  */}
      <article className="flex items-center gap-2">
        <spna className="bg-gray bg-opacity-15 p-2 rounded-[16px]">
          <SittingIcon />
        </spna>
        <h2 className="text-[1.3rem] font-bold text-gray">Monitor Sittings</h2>
      </article>
    </main>
  );
}

//  Monitor type function
function TypeOfMonitor({
  type,
  paragraph,
  icnoFunction,
  isSelected,
  onSelect,
}) {
  return (
    <li
      className={`flex flex-col gap-2  p-3 rounded-xl cursor-pointer  border-2 ${
        isSelected
          ? 'bg-white border-purple'
          : ' bg-gray-100 border-transparent'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center gap-2">
        <span className="bg-purple bg-opacity-15 p-2 rounded-[16px]">
          {icnoFunction}
        </span>{' '}
        <h1 className="font-bold text-[1.5rem]">{type}</h1>
      </div>
      <p className="text-left text-gray ">{paragraph}</p>
    </li>
  );
}

function Monitor() {
  const [typeOption, setTypeOption] = useState('keyword');
  return (
    <main className='m-auto'>
      <h1 className="text-[2rem] font-bold text-left mb-4">
        Create New Monitor
      </h1>
      <div className="MonitorType p-6 bg-white rounded-xl  ">
        <HeaderMonitor />
        <h3 className="text-[1.2rem] font-medium text-gray text-left my-4">
          Choose Monitor Type
        </h3>
        <ul className="flex gap-2 flex-col">
          <TypeOfMonitor
            type={'Keyword Monitor'}
            paragraph={'Monitor tweets that contain specific keywords.'}
            icnoFunction={<KeywordIcon />}
            isSelected={typeOption === 'keyword'}
            onSelect={() => setTypeOption('keyword')}
          />
          <TypeOfMonitor
            type={'Profile Monitor'}
            paragraph={'Monitor tweets that contain specific keywords.'}
            icnoFunction={<ProfileIcon />}
            isSelected={typeOption === 'profile'}
            onSelect={() => setTypeOption('profile')}
          />
        </ul>
      </div>
    </main>
  );
}

export default Monitor;
