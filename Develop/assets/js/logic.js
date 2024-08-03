// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', function (event) {

  event.preventDefault();

  const state = toggle.getAttribute('data-state');

  if (state === 'light') {
    body.classList = 'dark';

    toggle.dataset.state = 'dark';
    toggle.textContent = toggle.dataset.moon;

    localStorage.setItem('state', JSON.stringify(toggle.dataset.state));
  } else {
    body.classList = 'light';

    toggle.dataset.state = 'light';
    toggle.textContent = toggle.dataset.sun;

    localStorage.setItem('state', JSON.stringify(toggle.dataset.state));
  };
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function () { };

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

const storeLocalStorage = function () { };

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

