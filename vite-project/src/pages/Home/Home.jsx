import { Card } from '../../components/Card/Card'
import { api } from '../../utils/Api/Api'
import { useState, useEffect } from 'react'

import './Home.css'
// import Modal from "react-modal"

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     width: "40rem",
//     height: "50rem",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: " rgba(0, 0, 0, 0.8)",
//     borderRadius: "15px",
//   },
//   overlay: {
//     background: "rgba(0, 0, 0, 0.4)",
//   },
// };

// Modal.setAppElement("#root");

export function Home() {
  const [cavaleiroList, setCavaleiroList] = useState([]);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [uniqueAnime, setUniqueAnime] = useState({});

  async function getCavaleiro() {
    const cavaleiros = await api.getAllCavaleiros();
    setCavaleiroList(cavaleiros);
  }

  // function handleModal() {
  //   setModalIsOpen(!modalIsOpen);
  // }

  useEffect(() => {
    getCavaleiro();
  }, []);

  return (
    <div className="Home">

      <div className="card-list">
        {cavaleiroList.map((item, index) => {
          return (
            // <button
            //   className="button-card"
            //   onClick={() => {
            //     setUniqueAnime(item);
            //     handleModal();
            //   }}
            //   key={index}
            // >
            <Card
              key={index}
              nome={item.nome}
              constelacao={item.constelacao}
              categoria={item.categoria}
              tecnica={item.tecnica}
              idade={item.idade}
            />
            // </button>
          );
        })}
      </div>
      {
      /* <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card details"
      >
        <section>
          <section
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "transparent",
                cursor: "pointer",
                border: "none",
              }}
              onClick={handleModal}
            >
              <CgClose size={28} color="red" />
            </button>
          </section>
          <h2>{uniqueAnime.title}</h2>
          <h3>{uniqueAnime.gender}</h3>
          <h3>{uniqueAnime.protagonist}</h3>
          <h3>{uniqueAnime.year}</h3>
        </section>
      </Modal> */}

    </div>
  );
}