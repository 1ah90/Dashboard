import SearchIcon from '../icons/SearchIcon';

function Search({PlaceHolderName='Search..' ,style}) {
  return (
    <div className="searchContainer flex" >
      <SearchIcon />
      <input style={style} type="text" placeholder={PlaceHolderName} />
    </div>
  );
}

export default Search;
