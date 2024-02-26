import Image from "next/image";

const UniqueCard = ({
  flags,
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
}) => {
  return (
    <div className="uniqueContainer">
      <div className="flagContainer">
        <Image src={flags.svg} alt="flag" className="uniqueFlag" width={128} height={320} />
       
      </div>
      
      <div>
          <h1>{name.official} </h1>
      <article className="fullDescription">
        <div className="countryDescription">
          <p>
            <b>Native name:</b>{" "}
            {Object.keys(name.nativeName).map((key) => (
                <li key={key}>
                {key}: {name.nativeName[key].common}
              </li>
            ))}
          </p>
          <p><b>Population:</b> {population}</p>
          <p><b>Region:</b> {region}</p>
           
          <p><b>Subregion:</b> {subregion} </p>
          <p><b>Capital:</b> {capital} </p>
        </div>

        <div className="countryDescription">
          {tld && (
              <p>
              <b>Top level Domain:</b>{" "}
              {tld.map((tld) => (
                  <li key={tld}>{tld}</li>
                  ))}
            </p>
          )}
          <p>
            <b>Currencies:</b>{" "}
            {Object.keys(currencies).map((key) => (
                <li key={key}>{currencies[key].name}</li>
                ))}{" "}
          </p>
          <p>
            <b>Languages:</b> {Object.keys(languages).map((key)=>(
                <li key={key}>
                    {languages[key]}
                </li>
            ))}
          </p>
        </div>
      </article>
        <div>
        {borders && 
        <div className="borders"><b>Border Countries:</b> <ul className="borderUl">
          {borders.map((border, index)=>(
            <li className="borderLi" key={index}>{border} </li>
            ))} 
            </ul>
            </div>
        } 
        </div>
            </div>
    </div>
  );
};

export default UniqueCard;
