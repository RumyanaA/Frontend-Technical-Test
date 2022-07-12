import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "../Coin";
import "./MarketCoins.css";
function MarketCoins() {
  const [allCoins, setAllCoins] = useState([]);

  const fetchMarketCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=10"
      );
      setAllCoins(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMarketCoins();
  }, []);

  return (
    <>
      <div className="all-coins-container">
        {allCoins?.map((coin) => (
          <Coin key={coin.id} props={coin} />
        ))}
      </div>
    </>
  );
}
export default MarketCoins;
