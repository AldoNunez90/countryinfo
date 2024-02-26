


const SearchComponent = ({urlUpdate, changeUrl, value, filterHandle}) => {
    return ( <div className="searchContainer">
        <div className="searchBox">
        <img src={'search.svg'} alt="Search" className="serachIcon"/>
        <input type="text" placeholder="Search for a country" className="searchInput" onChange={(e)=>urlUpdate(e)} value={value}  />
        </div>
        <input type="submit" value="Enviar" onClick={()=>{changeUrl(), filterHandle()}} className="searchSubmit" />
    </div> );
}

export default SearchComponent;