const PubSub = require('../helpers/pub_sub.js');
const Data = require('../models/countries.js');

const CountryInfoView = function() {

};

CountryInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:country-selected', (event) => {
    const country = event.detail;
    this.render(country);
  });
}

CountryInfoView.prototype.render = function (country) {
  const container = document.querySelector('#country');
  container.innerHTML = '';

  const header = this.addElement('h2', country.name);
  console.log('working', header);
  const region = this.addElement('p', country.region);

  // const listLanguages = this.addElement('h4', 'Languages Spoken:');
  //
  // const list = this.createList(country.languages);

  container.appendChild(header);
  container.appendChild(region);
  // container.appendChild(listLanguages);
  // container.appendChild(list);
};

CountryInfoView.prototype.addElement = function(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
}

// CountryInfoView.prototype.createList = function(languages) {
//   const list = document.createElement('ul');
//   console.log('working??', list);
//   languages.forEach( (language) => {
//     const listItem = this.addElement('li', language);
//     list.appendChild(listItem);
//   });
//   return list
// }

module.exports = CountryInfoView;
