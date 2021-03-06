const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents()

  const countries = new Countries();
  countries.bindEvents();
  countries.getData();

  const countryView = new CountryView();
  countryView.bindEvents();
console.log('working', countryView);

});
