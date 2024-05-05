/* eslint-disable no-console */
function debounce(fn, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function debouncedSearch(query) {
  // Perform search operation with the query
  console.log('Searching for:', query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 1000);

const inputElement = document.getElementById('search-input');

inputElement.addEventListener('input', (event) => {
  debouncedSearchHandler(event.target.value);
});
