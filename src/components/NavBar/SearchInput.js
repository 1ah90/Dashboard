import SearchIcon from '../icons/SearchIcon';

// .searchContainer {
//   position: relative;
// }
// /* search icon  */
// .searchContainer svg {
//   position: absolute;
//   top: 50%;
//   left: 10px;
//   transform: translateY(-50%);
//   pointer-events: none;
// }
// /* search input  */
// .searchContainer input {
//   padding: 15px 15px 15px 35px;
//   font-size: 14px;
//   outline: none;
//   border-radius: var(--radios);
// }

// input::placeholder {
//   color: var(--fontColor);
// }

function Search({ PlaceHolderName = 'Search..', className }) {
  return (
    <div
      className={` overflow-hidden flex items-center  bg-white rounded-xl w-60 ${className}`}
    >
      <SearchIcon className={' ml-3  pointer-events-none'} />
      <input
        className="ml-3  outline-none  px-0 "
        type="text"
        placeholder={PlaceHolderName}
      />
    </div>
  );
}

export default Search;
