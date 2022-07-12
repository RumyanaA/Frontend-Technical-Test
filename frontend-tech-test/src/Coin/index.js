import { useState } from "react";
import axios from "axios";
import CoinModal from "../CoinModal";
import "./Coin.css";
function Coin({ props }) {
  const [clickedCoin, setClickedCoin] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const fetchCoinById = async () => {
    try {
      const fetchedCoin = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${props.id}`
      );
      setClickedCoin(fetchedCoin.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    await fetchCoinById();
    handleShow();
  };
  return (
    <>
      <div onClick={handleClick} className="coin-container">
        <div className="name-symbol-container">
          <p>{props.symbol}</p>
          <h6 className="coin-name">{props.name}</h6>
        </div>
        <img className="coin-img" alt={props.name} src={props.image} />
        <div className="prices">
          <p>Current price: {props.current_price}</p>
          <p> High 24 price: {props.high_24h}</p>
          <p> Low 24 price: {props.high_24h}</p>
        </div>
      </div>
      {show && (
        <CoinModal show={show} coin={clickedCoin} handleClose={handleClose} />
      )}
    </>
  );
}

export default Coin;
