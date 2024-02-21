// Card.js
import React from 'react';

interface CardProps {
  title: string;
  image: string;
    description: string;
    width: number;
    height: number;
}

const Card: React.FC<CardProps> = ({ title, image, description, width, height }) => {
  return (
    <div className="card rounded-full">
          <img src={image} alt={title} width={width} height={height} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
