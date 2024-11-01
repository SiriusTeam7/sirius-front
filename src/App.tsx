import '../src/styles/styles.css'
const App = () => {
  return (
    <div className="bg-primary min-h-screen p-4">
      <header className="mb-6">
        <h1 className="title-large">Sirius: Memoria Espaciada</h1>
        <input
          type="text"
          placeholder="¿Qué te gustaría aprender hoy?"
          className="input-search"
        />
      </header>

      <section className="mb-6">
        <h2 className="title-small">Retos de cursos actuales</h2>
        <button className="btn-secondary mt-2">Ya disponible</button>
      </section>

      <section>
        <h2 className="title-small">Retos por escuelas</h2>
        <button className="btn-secondary mt-2">Ya disponible</button>
        <p>Ejemplo de P</p>
      </section>
    </div>
  );
};

export default App;
