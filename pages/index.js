import { useState } from "react";
import CryptoList from "../components/CryptoList";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";

export default function Home({ filteredCrypto }) {
  const [search, setSearch] = useState("");

  const allCrypto = filteredCrypto.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CryptoList filteredCrypto={allCrypto} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=8&page=1&sparkline=false"
  );

  const filteredCrypto = await res.json();

  return {
    props: {
      filteredCrypto,
    },
  };
};
