import React, { useEffect, useState } from 'react';
import { fetchBreeds } from '../services/catApi';
import '../styles/Filter.css';

const BreedFilter = ({ onSelectBreed }) => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const loadBreeds = async () => {
            const breedData = await fetchBreeds();
            setBreeds(breedData);
        };
        loadBreeds();
    }, []);

    return (
        <select onChange={(e) => onSelectBreed(e.target.value)}>
            <option value="">All Breeds</option>
            {breeds.map(breed => (
                <option key={breed.id} value={breed.id}>
                    {breed.name}
                </option>
            ))}
        </select>
    );
};

export default BreedFilter;
