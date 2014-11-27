import Ember from 'ember';
import ENV from 'reddit/config/environment';

var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('post', {path: '/post/:post_id'});
  this.route('new', {path: '/new'});
});

export default Router;
