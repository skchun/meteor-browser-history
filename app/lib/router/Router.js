/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/internetexplorer', {
  name: 'InternetExplorer'
});

Router.route('/firefox', {
  name: 'Firefox'
});

Router.route('/chrome', {
  name: 'Chrome'
});