import { Card } from "../../components/card/card";
import { api } from "../../utils/api/api";
import { useState, useEffect } from "react";
import "./home.css";

export function Home() {
  const [cavaleiroList, setCavaleiroList] = useState([]);

  async function getCavaleiro() {
    const cavaleiros = await api.getAllCavaleiros();
    setCavaleiroList(cavaleiros);
  }

  useEffect(() => {
    getCavaleiro();
  }, []);

  return (
    <>
      <div className="card-list">
        {cavaleiroList.map((item, index) => {
          return <Card key={index} />;
        })}
      </div>
    </>
  );
}