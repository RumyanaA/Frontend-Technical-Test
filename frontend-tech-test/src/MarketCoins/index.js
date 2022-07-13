import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import Coin from "../Coin";
import { getMarketCoins } from "../service";
import "./MarketCoins.css";
function MarketCoins() {
  const [allCoins, setAllCoins] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const fetchMarketCoins = async () => {
    try {
      const response = await getMarketCoins(activePage);
      setAllCoins(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMarketCoins();
  }, [activePage]);

  let paginationNums = [];
  for (let number = 1; number <= 10; number++) {
    paginationNums.push(
      <Pagination.Item
        onClick={() => setActivePage(number)
        }
        key={number}
        active={number === activePage}
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
