const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:all-countries', (event) => {
    this.populate(event.detail);
  });
  
}

module.exports = SelectView;
