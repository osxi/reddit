import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RedditENV.locationType
});

Router.map(function() {
  this.route('post', {path: '/post/:post_id'});
  this.route('new', {path: '/new'});
});

export default Router;
