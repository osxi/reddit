import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  upVotes: DS.attr('number', {defaultValue: 0}),
  downVotes: DS.attr('number', {defaultValue: 0}),
  netVotes: function() {
    return this.get('upVotes') - this.get('downVotes');
  }.property('downVotes', 'upVotes')
});
