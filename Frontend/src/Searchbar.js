const SearchBar = ({keyword, onChange}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
    return (
        <div className="searchbar">
            <input 
            style={BarStyle}
            key="search-bar"
            value={keyword}
            placeholder={"Buscar"}
            onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
 
export default SearchBar;