// Card.js
import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
