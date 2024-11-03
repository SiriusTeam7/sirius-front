function TtileBar() {
    return (
        <header className="mb-6  px-5">
            <h1 className="title-large">Sirius: Memoria Espaciada</h1>
            <div className="px-4 w-full">
                <input
                    type="text"
                    placeholder="¿Qué te gustaría aprender hoy?"
                    className="input-search"
                />
            </div>

        </header>
    )
}

export default TtileBar