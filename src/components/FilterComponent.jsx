

const FilterComponent = ({filterRegion, value}) => {
    return ( <div className="filerContainer">
        <select name="filterRegion" id="filterRegion" onChange={(e)=>filterRegion(e)} value={value} >
            <option disabled value="">Filter by region</option>
            <option value="america">America</option>
            <option value="europe">Europa</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceanía</option>
        </select>
    </div> );
}
 
export default FilterComponent;