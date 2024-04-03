import axios from 'axios';

const BASE_URL = `https://api.unsplash.com`;
const API_KEY = `vjNpt77wuSKbGik2rgzet3FxmzAN6s7lF6jdYTlGv0I`;

export const searchPhoto = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/photos?query=${query}&page=${page}&orientation=landscape&per_page=12&client_id=${API_KEY}`,
  );
  return data;
};
