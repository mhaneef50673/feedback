/**
 * fetchData function uses fetch for posting/retrieving data
 * @param {*} options request options
 * @param {*} url endpoint url
 */
export const fetchData = (options, url) => {
  return fetch(url, options)
    .then((response) => {
      return response.json();
    });
};
