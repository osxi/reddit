import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function() {
      console.log('createPost() called.');
      this.model.set('title', this.get('newTitle'));
      this.model.save();
      this.set('newTitle', '');
    }
  }
});
