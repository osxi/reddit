import Ember from 'ember';

export default Ember.ObjectController.extend({
  netVotes: function() {
    var model = this.get('model');
    return model.get('upVotes') - model.get('downVotes');
  }.property('downVotes', 'upVotes')
});
