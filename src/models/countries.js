const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = [];
}

Countries.prototype.getData = function(){
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status != 200){
      return;
  }
  const jsonString = xhr.responseText;
  const data = JSON.parse(jsonString);
  this.countries = data;
  PubSub.publish('Countries:all-countries', this.countries);
  // console.log('working', data);
  });

 xhr.open('GET', 'https://restcountries.eu/rest/v2');
 xhr.setRequestHeader('Accept', 'application/json')
 xhr.send();

Countries.prototype.bindEvents = function() {
  PubSub.publish('Countries:data-ready', this.countries);

  PubSub.subscribe('SelectView:country-selected', (event) => {
    const selectedIndex = event.detail;
    const country = this.findCountry(selectedIndex);
    PubSub.publish('Countries:country-selected', country);

  });
}

Countries.prototype.findCountry = function (index) {
  return this.data[index];
}
}

module.exports = Countries;
