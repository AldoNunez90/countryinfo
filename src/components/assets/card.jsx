'use client'
import Link from "next/link";
import Image from "next/image";

const Cards = (country) => {
    return ( <li className="cardContainer" id={country.country.ccn3} >
        <div className="titleCard">
       <Link href={`countries/${country.country.name.common}`}>
        <Image  src={country.country.flags.svg} alt={country.country.name.officia} className="flags" width={24} height={24}/>
        </Link>
        </div>
        <div>
        <h3>{ country.country.name.official }</h3>
        <p><strong>Population:</strong> {country.country.population}</p>
        <p><strong>Region:</strong> {country.country.region}</p>
        <p><strong>Capital:</strong> {country.country.capital}</p>
        </div>
    </li> );
}
 
export default Cards;