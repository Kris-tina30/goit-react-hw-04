import axios from 'axios';


// const BASE_URL = `https://api.unsplash.com/photos`;
// const API_KEY = `vjNpt77wuSKbGik2rgzet3FxmzAN6s7lF6jdYTlGv0I`;
// export const reguestPhotos = async () => {

//     const { data } = await axios.get(BASE_URL, {
//       params: {
//         client_id: API_KEY,
//       },
//     });
//     return data
// }



export const searchPhoto = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=some_${query}&page=${page}_number`,
  );
  return data;
};
