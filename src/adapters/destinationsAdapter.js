export const fetchDestinations = () => {
  const data = "../dataset/destinationsCSV.json";
  fetch(data)
    .then(res => res.json())
    .then(data);
};
