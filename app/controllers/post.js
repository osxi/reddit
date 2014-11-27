import Ember from 'ember';

export default Ember.ObjectController.extend({
  netVotes: function() {
    return this.get('model.upVotes') - this.get('model.downVotes');
  }.property('downVotes', 'upVotes')
});
