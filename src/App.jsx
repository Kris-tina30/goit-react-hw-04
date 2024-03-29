import { useEffect, useState } from 'react';

import axios from 'axios';

import './App.css';
import ImageGallery from './components/ImageGallery';

const BASE_URL = `https://api.unsplash.com/photos`;
const API_KEY = `vjNpt77wuSKbGik2rgzet3FxmzAN6s7lF6jdYTlGv0I`;

// {
//   "urls": {
//      "raw": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9",
//      "full": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80",
//      "regular": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max",
//      "small": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max",
//      "thumb": "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&w=200&fit=max"
//   },
//   // ... other photo fields
// }

// [
//   {
//     id: 'LBI7cgq3pbM',
//     created_at: '2016-05-03T11:00:28-04:00',
//     updated_at: '2016-07-10T11:00:01-05:00',
//     width: 5245,
//     height: 3497,
//     color: '#60544D',
//     blur_hash: 'LoC%a7IoIVxZ_NM|M{s:%hRjWAo0',
//     likes: 12,
//     liked_by_user: false,
//     description: 'A man drinking a coffee.',
//     user: {
//       id: 'pXhwzz1JtQU',
//       username: 'poorkane',
//       name: 'Gilbert Kane',
//       portfolio_url: 'https://theylooklikeeggsorsomething.com/',
//       bio: 'XO',
//       location: 'Way out there',
//       total_likes: 5,
//       total_photos: 74,
//       total_collections: 52,
//       instagram_username: 'instantgrammer',
//       twitter_username: 'crew',
//       profile_image: {
//         small:
//           'https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32',
//         medium:
//           'https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64',
//         large:
//           'https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128',
//       },
//       links: {
//         self: 'https://api.unsplash.com/users/poorkane',
//         html: 'https://unsplash.com/poorkane',
//         photos: 'https://api.unsplash.com/users/poorkane/photos',
//         likes: 'https://api.unsplash.com/users/poorkane/likes',
//         portfolio: 'https://api.unsplash.com/users/poorkane/portfolio',
//       },
//     },
//     current_user_collections: [
//       // The *current user's* collections that this photo belongs to.
//       {
//         id: 206,
//         title: 'Makers: Cat and Ben',
//         published_at: '2016-01-12T18:16:09-05:00',
//         last_collected_at: '2016-06-02T13:10:03-04:00',
//         updated_at: '2016-07-10T11:00:01-05:00',
//         cover_photo: null,
//         user: null,
//       },
//       // ... more collections
//     ],
//     urls: {
//       raw: 'https://images.unsplash.com/face-springmorning.jpg',
//       full: 'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg',
//       regular: 'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=1080&fit=max',
//       small: 'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max',
//       thumb: 'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=200&fit=max',
//     },
//     links: {
//       self: 'https://api.unsplash.com/photos/LBI7cgq3pbM',
//       html: 'https://unsplash.com/photos/LBI7cgq3pbM',
//       download: 'https://unsplash.com/photos/LBI7cgq3pbM/download',
//       download_location: 'https://api.unsplash.com/photos/LBI7cgq3pbM/download',
//     },
//   },
//   // ... more photos
// ];

function App() {
  const [photos, setPhotos] = useState([null]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      setIsLoading(true);
      const { data } = await axios.get(BASE_URL, {
        params: {
          client_id: API_KEY,

        },
      });
      console.log('data:', data);
      setPhotos(data);
      console.log('photos:', data[0].id);
      setIsLoading(false);

      
      // try {
      //   setIsLoading(true);
      //   const photo = await requestPhotos();
      //   setPhotos(photo.urls);
      // }
      // catch (error) {
      //   setIsError(true);
      // } finally {
      //   setIsLoading(false);
      // }
    }

    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Photo gallery</h1>
      {isLoading && <div>Loading....</div>}

      {/* <ErrorMessage />
      <Loader />
      <LoadMoreBtn />
      <SearchBar /> */}
      <ImageGallery photos={[photos]} />
      {/* <ImageModal /> */}
    </div>
  );
}

export default App;
