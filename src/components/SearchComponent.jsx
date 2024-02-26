import Image from "next/image";



const SearchComponent = ({urlUpdate, changeUrl, value, filterHandle}) => {
    return ( <div className="searchContainer">
        <div className="searchBox">
        <Image src={'search.svg'} alt="Search" className="serachIcon" width={24} height={24}/> 
        <input type="text" placeholder="Search for a country" className="searchInput" onChange={(e)=>urlUpdate(e)} value={value}  />
        </div>
        <input type="submit" value="Enviar" onClick={()=>{changeUrl(), filterHandle()}} className="searchSubmit" />
    </div> );
}

export default SearchComponent;