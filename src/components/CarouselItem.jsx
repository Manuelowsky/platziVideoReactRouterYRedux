//Importando react
import React from 'react';
//Importando prop-types
import PropTypes from 'prop-types';
//Importando estilos
import '../assets/styles/components/CarouselItem.scss';
//Importando imagenes
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

//Creando componente
const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
  <img className="carousel-item__img" src={cover} alt={title}  />
  <div className="carousel-item__details">
    <div>
      <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
      <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
    </div>
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">
      {`${year} ${contentRating} ${duration}`}
    </p>
  </div>
</div>
);

//Documentando propiedades del componente
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

//Exportando componente
export default CarouselItem;