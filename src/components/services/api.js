import axios from 'axios';

const BASE_URL = `https://api.unsplash.com/photos`;
const API_KEY = `vjNpt77wuSKbGik2rgzet3FxmzAN6s7lF6jdYTlGv0I`;
export const reguestPhotos = async () => {

    const { data } = await axios.get(BASE_URL, {
      params: {
        client_id: API_KEY,
      },
    });
    return data
}



export const reguestPhotosByQuery = async (query = '', page = 1) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${some_query}&page=${page_number}`);
  return data;
};
