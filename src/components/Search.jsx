//Importando react
import React from 'react';
//Importando estilos
import '../assets/styles/components/Search.scss';

//Creando componente
const Search = () => (
  <section className="main">
    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" className="input" placeholder="Buscar..." />
  </section>
);

//Exportando componente
export default Search;