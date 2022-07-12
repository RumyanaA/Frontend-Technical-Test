import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import parse from "html-react-parser";
import "./CoinModal.css";

function CoinModal({ show, coin, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{coin.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <span>Hashing algorithm: {(coin.hashing_algorithm?coin.hashing_algorithm: 'Unknown' )}</span>
          <p>{parse(coin.description.en)}</p>
          <div className="additional-info">
            <span>Market cap: {coin.market_data.market_cap.eur}</span>
            <span>Genesis Date: {(coin.genesis_date? coin.genesis_date : 'Unknown')}</span>
            <a href={coin.links.homepage[0]}>{coin.links.homepage[0]}</a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CoinModal;
