import Header from "../design-system/Header"

function MainLayout() {
    return (
        <div className="bg-primary min-h-screen p-4">

            <Header />
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

    )
}

export default MainLayout