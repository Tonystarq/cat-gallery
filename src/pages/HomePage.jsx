import React, { useState } from 'react';
import CatGallery from '../components/CatGallery';
import BreedFilter from '../components/BreedFilter';

const HomePage = () => {
    const [selectedBreed, setSelectedBreed] = useState('');

    return (
        <div className="container">
            <h1>🐾 Random Cat Images Gallery 🐾</h1>
            <BreedFilter onSelectBreed={setSelectedBreed} />
            <CatGallery breed={selectedBreed} />
        </div>
    );
};

export default HomePage;
