import jsonData from '../dataset/destinationsCSV.json';

// const loadData = () => JSON.parse(JSON.stringify(jsonData));
export const fetchDestinations = () => {
  // const data = require('../dataset/destinationsCSV.json')
  // return fetch(data)
    // .then(res => res.json());
    return JSON.parse(JSON.stringify(jsonData));
};
