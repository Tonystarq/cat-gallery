import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_vqR2p69yzrnAescDc80YRvzlcwGsfqtI3L337S3ajPEncPVWaaPG5N185f1Zvidl'; 

export const fetchCatImages = async (limit = 10, breed = '') => {
    const params = {
        limit,
        has_breeds: true,
        breed_ids: breed,
        api_key: API_KEY
    };

    const response = await axios.get(API_URL, { params });
    return response.data;
};

export const fetchBreeds = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
        headers: { 'x-api-key': API_KEY }
    });
    return response.data;
};
