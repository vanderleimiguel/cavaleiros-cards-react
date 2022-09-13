import "./card.css";

export function Card() {
  return (
    <div className="card-body">
      <h2>Cavaleiros</h2>
      <section className="card-info">
        <span className="card-span">Nome:</span>
        <h3>nome</h3>
      </section>
      <section className="card-info">
        <span className="card-span">Constelação:</span>
        <h3>constelacao</h3>
      </section>
      <section className="card-info">
        <span className="card-span">Categoria:</span>
        <h3>whatever</h3>
      </section>
      <section className="card-info">
        <span className="card-span">Técnica:</span>
        <h3>whatever</h3>
      </section>
      <section className="card-info">
        <span className="card-span">Idade:</span>
        <h3>2005</h3>
      </section>
    </div>
  );
}