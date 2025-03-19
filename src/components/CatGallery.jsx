import React, { useEffect, useState } from 'react';
import { fetchCatImages } from '../services/catApi';
import CatCard from './CatCard';
import '../styles/CatGallery.css';

const CatGallery = ({ breed }) => {
    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadCats = async (isInitial = false) => {
        setLoading(true);
        const catImages = await fetchCatImages(10, breed);
        setCats(prevCats => isInitial ? catImages : [...prevCats, ...catImages]);
        setLoading(false);
    };

    useEffect(() => {
        loadCats(true); // Pass true for initial load
    }, [breed]);

    return (
        <div className="cat-gallery-container">
            <div className="cat-gallery">
                {cats.map(cat => (
                    <CatCard key={cat.id} cat={cat} />
                ))}
            </div>
            <div className="load-more-container">
                <button 
                    onClick={() => loadCats(true)} 
                    className="refresh-btn"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : '↻ Refresh'}
                </button>
                <button 
                    onClick={() => loadCats(false)} 
                    className="load-more-btn"
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Load More'}
                </button>
            </div>
        </div>
    );
};

export default CatGallery;
