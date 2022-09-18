import './Card.css'

export function Card({ nome, constelacao, categoria }) {
  return (
    <div className='card-component'>

      <h2>{nome}</h2>

      <section className="card-infos">
        <span className='card-text'>Cavaleiro de {categoria}</span>
      </section>
      <section className="card-infos">
        <span className='card-text'>da Constelação de {constelacao}</span>
      </section>
    </div>
  );
}