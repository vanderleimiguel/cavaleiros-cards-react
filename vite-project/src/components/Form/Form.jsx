import { useState } from "react";
import { api } from "../../utils/api/api";
import "./Form.css"

export function Form() {
  const [newCavaleiro, setNewCavaleiro] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    setNewCavaleiro({ ...newCavaleiro });
    var qtdForm = 0;
    var key
    for (key in newCavaleiro) {
      if (newCavaleiro.hasOwnProperty(key)) {
        qtdForm++;
      }
    }

    if (newCavaleiro.nome == "" || newCavaleiro.constelacao == "" || newCavaleiro.categoria == "" || newCavaleiro.tecnica == "" || newCavaleiro.idade == "" || qtdForm < 5) {
      alert("Preencha todos os campos")
    } else {
      await api.createCavaleiro(newCavaleiro);
      location.reload();
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-inputs">
        <section>
          <span>Nome: </span>
          <input className='form-nome'
            type="text"
            name="nome"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, nome: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Constelacao: </span>
          <input className='form-constelacao'
            type="text"
            name="constelacao"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, constelacao: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Categoria: </span>
          <input className='form-categoria'
            type="text"
            name="categoria"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, categoria: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Tecnica: </span>
          <input className='form-tecnica'
            type="text"
            name="tecnica"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, tecnica: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Idade: </span>
          <input className='form-idade'
            type="number"
            name="idade"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, idade: event.target.value });
            }}
          ></input>
        </section><br />
        <button type="submit" className="btn-submit">
          ADICIONAR
        </button>
      </form>
    </div>
  );
}