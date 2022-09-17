import './Card.css'

export function Card({ nome, constelacao, categoria, tecnica, idade }) {
  return (
    <div className='card-component'>


      <h2>{nome}</h2>

      <section className="card-infos">
        <span className='card-span'>Constelação: <span>{constelacao}</span></span>
      </section>
      <section className="card-infos">
        <span className='card-span'>Categoria: <span>{categoria}</span></span>
      </section>
      <section className="card-infos">
        <span className='card-span'>Tecnica: <span>{tecnica}</span></span>
      </section>
      <section className="card-infos">
        <span className='card-span'>Idade: <span>{idade}</span></span>
      </section>




    </div>



  );
}