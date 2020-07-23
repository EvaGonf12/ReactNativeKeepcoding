import axios from 'axios';
import {BASE_URL} from '../config/api';

const api_key = '1d7c28d4-5752-458b-a1e8-b7b6eded03d7';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json', "api_key": api_key},
});

export const getBreeds = () => {
  console.log("BREEDS")
  const url = `/breeds`;
  return instance.get(url);
};

export const getImageBreed = (breedID) => {
  const url = `/images/search?breed_ids=${breedID}`;
  return instance.get(url);
}

export const getDetails = categoryId => {
  const url = `/breeds/search?q=${categoryId}`;
  return instance.get(url);
};

