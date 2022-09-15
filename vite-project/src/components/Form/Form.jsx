import { useState } from "react";
import { api } from "../../utils/api/api";
import "./Form.css"

export function Form() {
  const [newCavaleiro, setNewCavaleiro] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    setNewCavaleiro({ ...newCavaleiro });

    await api.createCavaleiro(newCavaleiro);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-inputs">
        <section>
          <span>Nome:</span>
          <input
            type="text"
            name="nome"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, nome: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Constelacao</span>
          <input
            type="text"
            name="constelacao"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, constelacao: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Categoria:</span>
          <input
            type="text"
            name="categoria"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, categoria: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Tecnica:</span>
          <input
            type="text"
            name="tecnica"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, tecnica: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Idade:</span>
          <input
            type="number"
            name="idade"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, idade: event.target.value });
            }}
          ></input>
        </section>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}