Meteor.startup(function() {
  Session.setDefault('facebookInitialized', false);
  Meteor.call('facebookAppId', function(error, appId) {
    FB.init({
        appId      : appId,
        status     : true,
        xfbml      : true,
        version    : 'v2.5'
      });
      Session.set('facebookInitialized', true);
      FB.XFBML.parse();

  });
});
Template.registerHelper('fbLikeConfig', function() {
  return {href: 'http://anakiklotetrise.herrco.gr', colorscheme: 'dark'}
});

Template.socialBar.rendered = function() {
  if (Session.get('facebookInitialized')) {
    FB.XFBML.parse();
  }
};
