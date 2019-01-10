const PubSub = require('../helpers/pub_sub.js');
const Data = require('../models/countries.js');

const CountryInfoView = function() {

};

CountryInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:country-selected', (event) => {
    const country = event.detail;
    this.render(country);
  });
}

CountryInfoView.prototype.render = function (country) {
  const container = document.querySelector('#country');
  container.innerHTML = '';
  // console.log('working', container);
  const header = this.addElement('h2', country.name);
  console.log('working', header);
  const region = this.addElement('p', country.region);

  const languageHeader = this.addElement('h3', 'Languages Spoken:');
  const language = this.addElement('p', country.languages[0].name);

  const flag = this.addElement('img', country.flag);

  container.appendChild(header);
  console.log('work', (header));
  container.appendChild(region);
  container.appendChild(languageHeader);
  container.appendChild(language);
  container.appendChild(flag);


};

CountryInfoView.prototype.addElement = function(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;

}


module.exports = CountryInfoView;
