import './DropdownStyle.css';

function MenuDropdown({ name = [], profileOptions = [] }) {
  const items = name.length ? name : profileOptions;

  return (
    <ul className={`dropdown ${name.length ? 'linkDropdown' : 'profleDropdown'}`}>
      {items.map((item, i) => (
        <li key={i}>
          {item.option ?? item.item}
        </li>
      ))}
    </ul>
  );
}

export default MenuDropdown;
