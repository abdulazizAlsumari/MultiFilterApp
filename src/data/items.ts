// src/data/items.ts
import {Item} from '../types';

export const IMAGES: {[key: string]: any} = {
  iphone6: require('../assets/images/iphone6.jpg'),
  iphone7: require('../assets/images/iphone7.jpeg'),
  iphone12: require('../assets/images/iphone12.jpeg'),
  s24: require('../assets/images/s24.png'),
  s21: require('../assets/images/s21.jpg'),
  Accessories1: require('../assets/images/Accessories1.jpg'),
  Accessories2: require('../assets/images/Accessories2.jpeg'),
  DellXPS13: require('../assets/images/DellXPS13.jpg'),
  HPSpectrex360: require('../assets/images/HPSpectrex360.jpg'),
  LenovoThinkPadX1Carbon: require('../assets/images/LenovoThinkPadX1Carbon.jpg'),
  AsusROGZephyrusG14: require('../assets/images/AsusROGZephyrusG14.jpg'),
  AppleMacBookPro24: require('../assets/images/AppleMacBookPro24.jpg'),
  AppleMacBookPro23: require('../assets/images/AppleMacBookPro23.jpg'),
  watchApple: require('../assets/images/watchApple.jpg'),
};

export const items: Item[] = [
  {
    id: 1,
    name: 'Accessories 1',
    category: 'Accessories',
    model: '1x',
    variant: '1',
    price: 99.99,
    brand: 'Nike',
    image: 'Accessories1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Accessories 2',
    category: 'Accessories',
    model: '1x',
    variant: '1',
    price: 29.99,
    brand: 'Guess',
    image: 'Accessories2',
    rating: 4,
  },
  {
    id: 3,
    name: 'iphone 6',
    category: 'phones',
    model: 'iphone6',
    variant: '128 GB',
    price: 29.99,
    brand: 'Apple',
    image: 'iphone6',
    rating: 4,
  },
  {
    id: 4,
    name: 'iphone 6',
    category: 'phones',
    model: 'iphone6',
    variant: '256 GB',
    price: 40.99,
    brand: 'Apple',
    image: 'iphone6',

    rating: 4,
  },
  {
    id: 5,
    name: 'iphone 7',
    category: 'phones',
    model: 'iphone7',
    variant: '512 GB',
    price: 29.99,
    brand: 'Apple',
    image: 'iphone7',
    rating: 4,
  },
  {
    id: 6,
    name: 'watch Apple',
    category: 'wathes',
    model: 'series 6',
    variant: 'SE',
    price: 2900.99,
    brand: 'Apple',
    image: 'watchApple',
    rating: 4,
  },
  {
    id: 7,
    name: 'Samsung Galaxy S21',
    category: 'phones',
    model: 'Galaxy S21',
    variant: '128 GB',
    price: 799.99,
    brand: 'Samsung',
    image: 's21',
    rating: 5,
  },
  {
    id: 8,
    name: 'Samsung Galaxy S21',
    category: 'phones',
    model: 'Galaxy S21',
    variant: '256 GB',
    price: 899.99,
    brand: 'Samsung',
    image: 's21',
    rating: 5,
  },
  {
    id: 9,
    name: 'Samsung Galaxy S21',
    category: 'phones',
    model: 'Galaxy S21',
    variant: '512 GB',
    price: 999.99,
    brand: 'Samsung',
    image: 's21',
    rating: 5,
  },
  {
    id: 10,
    name: 'iPhone 12',
    category: 'phones',
    model: 'iPhone 12',
    variant: '64 GB',
    price: 799.99,
    brand: 'Apple',
    image: 'iphone12',
    rating: 5,
  },
  {
    id: 11,
    name: 'iPhone 12',
    category: 'phones',
    model: 'iPhone 12',
    variant: '128 GB',
    price: 899.99,
    brand: 'Apple',
    image: 'iphone12',
    rating: 5,
  },
  {
    id: 12,
    name: 'iPhone 12',
    category: 'phones',
    model: 'iPhone 12',
    variant: '256 GB',
    price: 999.99,
    brand: 'Apple',
    image: 'iphone12',
    rating: 5,
  },
  {
    id: 13,
    name: 'Dell XPS 13',
    category: 'laptops',
    model: 'XPS 13',
    variant: '256 GB',
    price: 1299.99,
    brand: 'Dell',
    image: 'DellXPS13',
    rating: 4,
  },
  {
    id: 14,
    name: 'HP Spectre x360',
    category: 'laptops',
    model: 'Spectre x360',
    variant: '512 GB',
    price: 1499.99,
    brand: 'HP',
    image: 'HPSpectrex360',
    rating: 4,
  },
  {
    id: 15,
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptops',
    model: 'ThinkPad X1 Carbon',
    variant: '1 TB',
    price: 1799.99,
    brand: 'Lenovo',
    image: 'LenovoThinkPadX1Carbon',
    rating: 5,
  },
  {
    id: 16,
    name: 'Asus ROG Zephyrus G14',
    category: 'laptops',
    model: 'ROG Zephyrus G14',
    variant: '512 GB',
    price: 1699.99,
    brand: 'Asus',
    image: 'AsusROGZephyrusG14',
    rating: 5,
  },
  {
    id: 17,
    name: 'Apple MacBook Pro 2024',
    category: 'laptops',
    model: 'MacBook Pro',
    variant: '512 GB',
    price: 1999.99,
    brand: 'Apple',
    image: 'AppleMacBookPro24',
    rating: 3,
  },
  {
    id: 18,
    name: 'Apple MacBook Pro 2023',
    category: 'laptops',
    model: 'MacBook Pro',
    variant: '1 TB',
    price: 4999.99,
    brand: 'Apple',
    image: 'AppleMacBookPro23',
    rating: 2,
  },
];
