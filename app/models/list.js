import DS from 'ember-data';
import Todo from './todo';

export default DS.Model.extend({


name: DS.attr('string',{defaultValue: ''}),

});
