import Ember from 'ember';
import Todo from '../models/todo';


export default Ember.Controller.extend({
  lists: Ember.computed.alias('model'),
  list: Ember.computed.alias('lists.firstObject'),




  actions:{
       addlist: function(name) {
    var listItem = this.store.createRecord('list');
    listItem.set('name',name);
         
     
    listItem.save();
    },

       deleteList: function(list){
    list.deleteRecord();
    list.save();
    },

  }
});
