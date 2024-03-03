"use client";

import Layout from "@/components/Layout";
import Loader from "@/components/assets/Loader";
import UniqueCard from "@/components/assets/uniqueCard";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Countryinfo = () => {
  const params = useParams();
  const URL = `https://restcountries.com/v3.1/name/${params.country}`;
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    document.title = `Countries | ${params.country}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [URL]);

  const goBack = () => {
    router.back();
  };
  console.log(data);
  return (
    <Layout>
      <div>
        {data.length === 0 ? (
          <Loader />
        ) : (
          <>
            <button className="btn-simple back" onClick={goBack}>
              <b>← Back</b>
            </button>
            <section>
              {data.map((country, index) => (
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
