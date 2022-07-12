import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";
import Coin from "../Coin";
import "./MarketCoins.css";
function MarketCoins() {
  const [allCoins, setAllCoins] = useState([]);
  const [activeNum, setActiveNum] = useState(1);
  const [page, setPage] = useState(1);
  const fetchMarketCoins = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=10&page=${page}`
      );
      setAllCoins(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMarketCoins();
  }, [page]);

  let paginationNums = [];
  for (let number = 1; number <= 10; number++) {
    paginationNums.push(
      <Pagination.Item
        onClick={() => {
          setActiveNum(number);
          setPage(number);
        }}
        key={number}
        active={number === activeNum}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="all-coins-container">
        {allCoins?.map((coin) => (
          <Coin key={coin.id} props={coin} />
        ))}
        <Pagination>{paginationNums}</Pagination>
      </div>
    </>
  );
}
export default MarketCoins;
