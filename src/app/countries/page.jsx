"use client";
import { useState, useEffect } from "react";
import Cards from "../../components/assets/card";
import SearchComponent from "../../components/SearchComponent";
import FilterComponent from "../../components/FilterComponent";
import Link from "next/link";
import Layout from "@/components/Layout";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [URL, setURL] = useState("https://restcountries.com/v3.1/all");
  const [search, setSearch] = useState("");
  const [filterValue, setFilterValue] = useState("");
  useEffect(() => {
    document.title = "Countries | World Countries Info ";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, [URL]);

  const urlUpdate = (e) => {
    setSearch(e.target.value);
  };
  const filterHandle = () => {
    setFilterValue("");
  };
  const changeURL = () => {
    search.trim(0).length === 0
      ? setURL("https://restcountries.com/v3.1/all")
      : setURL(`https://restcountries.com/v3.1/name/${search}`);
  };

  const filterRegion = (e) => {
    setURL(`https://restcountries.com/v3.1/region/${e.target.value}`);
    setCountries([]);
    setSearch("");
    setFilterValue(e.target.value);
  };

  return (
    <Layout >

    <div className="container">
      <div className="searchFilter">
        <SearchComponent
          urlUpdate={urlUpdate}
          filterHandle={filterHandle}
          changeUrl={changeURL}
          value={search}
          />
        <FilterComponent filterRegion={filterRegion} value={filterValue} />
      </div>

      <div className="countryMap">
        {countries.message != "Not Found" ? (
          countries.map((country, index) => {
            return <Cards key={index} country={country} />;
          })
          ) : (
            <p className="noCountry">No Country found</p>
            )}
      </div>
    </div>
            </Layout>
  );
};

export default Countries;
