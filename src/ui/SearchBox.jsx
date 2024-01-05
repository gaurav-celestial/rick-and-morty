import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ input, searchHandler }) {
  return (
    <div className="search">
      <input ref={input} type="text" />
      <SearchIcon color="primary" onClick={searchHandler}>
        Search
      </SearchIcon>
    </div>
  );
}
