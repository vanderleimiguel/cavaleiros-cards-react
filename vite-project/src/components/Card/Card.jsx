import './Card.css'

export function Card() {
  return (
    <div className='card-component'>
      <section className='card'>
        <h2>Cavaleiros</h2>
        <section className="card-infos">
          <span className="card-span">nome:</span>
          <h3>Protagonist name</h3>
        </section>
        <section className="card-infos">
          <span className="card-span">constelacao:</span>
          <h3>whatever</h3>
        </section>
        <section className="card-infos">
          <span className="card-span">categoria:</span>
          <h3>whatever</h3>
        </section>
        <section className="card-infos">
          <span className="card-span">tecnica:</span>
          <h3>whatever</h3>
        </section>
        <section className="card-infos">
          <span className="card-span">idade:</span>
          <h3>2005</h3>
        </section>
      </section>


    </div>



  );
}