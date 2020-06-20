export const fetchData = (options, url) => {
  return fetch(url, options)
    .then((response) => {
      return response.json();
    });
};
