"use client";

import Layout from "@/components/Layout";
import Loader from "@/components/assets/Loader";
import UniqueCard from "@/components/assets/uniqueCard";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Countryinfo = () => {
  const useParams = useParams();
  const URL = `https://restcountries.com/v3.1/name/${useParams.country}`;
  const [Data, SetData] = useState([]);
  const Router = useRouter();

  useEffect(() => {
    document.title = `Countries | ${useParams.country}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        SetData(data);
      });
  }, [URL]);

  const goBack = () => {
    Router.back();
  };

  return (
    <Layout>
      <div>
      
        {Data.length === 0 ? (
          
          <Loader />
        ) : (
          <>
          <button className="btn-simple back" onClick={goBack} >
      <b>← Back</b>
            </button>
            <section>
              {Data.map((country, index) => (
                <UniqueCard key={index} {...country} />
              ))}
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Countryinfo;
