export const fetchDestinations = () => {
  const data = require('../dataset/destinationsCSV.json')
  // const data = "../dataset/destinationsCSV.json";
  fetch(data)
    .then(res => res.json())
    .then(console.log);
};
