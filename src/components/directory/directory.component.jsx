
import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
  {
    "id": 1,
    "title": "Monsteras",
    "imageUrl": "https://images.unsplash.com/photo-1545165375-1b744b9ed444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "route": 'shop/monsteras'
  },
  {
    "id": 2,
    "title": "Succulents",
    "imageUrl": "https://images.unsplash.com/photo-1551893665-f843f600794e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "route": 'shop/succulents'
  },
  {
    "id": 3,
    "title": "Indooor Plants",
    "imageUrl": "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "route": 'shop/indoorPlants'
  },
  {
    "id": 4,
    "title": "Outdoor Plants",
    "imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/english-cottage-garden-with-lupin-flowers-and-jacob-s-ladder-greek-valerian-in-hazy-sunshine-1595607770.jpg?crop=1.00xw:0.752xh;0,0.137xh&resize=1200:*",
    "route": 'shop/outdoorPlants'
  },
  {
    "id": 5,
    "title": "Pots",
    "imageUrl": "https://m.media-amazon.com/images/S/aplus-media/sc/5e4b87aa-d59e-4643-ba23-2b0f9bbe2637.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    "route": 'shop/pots'
  }
];

const Directory = () => {
 
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;