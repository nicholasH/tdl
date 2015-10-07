import Ember from 'ember';

var Todo =  Ember.Object.extend({
  name: ""
});

Todo.reopenClass({
  createRandom: function() {
    return Todo.create({
      name: "magic sword of life"});
  } 
});

export default Todo;