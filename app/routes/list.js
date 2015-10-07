import Ember from 'ember';
import List from 'tdl/models/list';

export default Ember.Route.extend({
  
  model: function(){
    return this.store.findAll('list');
  }
  
});
