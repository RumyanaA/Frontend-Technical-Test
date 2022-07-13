import axios from "axios";

export const getMarketCoins = async ({ activePage }) =>
  await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=10&page=${activePage}`
  );

export const getCoinById = async (coinId) => await axios.get(
    `https://api.coingecko.com/api/v3/coins/${coinId}`
  );
