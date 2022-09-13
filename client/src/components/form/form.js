import { useState } from "react";
import { api } from "../../utils/api/api";

export function Form() {
  const [newCavaleiro, setNewCavaleiro] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    setNewCavaleiro({ ...newCavaleiro});

    await api.createAnime(newCavaleiro);
  }

 
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-inputs">
        <section>
          <span>Title:</span>
          <input
            type="text"
            name="title"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, title: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Protagonist</span>
          <input
            type="text"
            name="protagonist"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, protagonist: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Gender:</span>
          <input
            type="text"
            name="gender"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, gender: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>Year:</span>
          <input
            type="number"
            name="year"
            onChange={(event) => {
              setNewCavaleiro({ ...newCavaleiro, year: event.target.value });
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