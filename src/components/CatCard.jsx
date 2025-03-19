import React from 'react';
import '../styles/CatCard.css';

const CatCard = ({ cat }) => (
    <div className="cat-card">
        <img src={cat.url} alt="Cat" />
    </div>
);

export default CatCard;
