import './Card.css'

export function Card({ nome, constelacao, categoria, tecnica, idade }) {
  return (
    <div className='card-component'>
      <section className='card'>
        <h2>Cavaleiros</h2>
        <section className="card-infos">
          <span className='card-text'>Nome: <span>{nome}</span></span>
        </section>
        <section className="card-infos">
          <span className='card-text'>Constelação: <span>{constelacao}</span></span>
        </section>
        <section className="card-infos">
          <span className='card-text'>Categoria: <span>{categoria}</span></span>
        </section>
        <section className="card-infos">
          <span className='card-text'>Tecnica: <span>{tecnica}</span></span>
        </section>
        <section className="card-infos">
          <span className='card-text'>Idade: <span>{idade}</span></span>
        </section>
      </section>


    </div>



  );
}