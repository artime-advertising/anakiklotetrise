Meteor.call('facebookAppId', function(error, appId) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : appId,
      status     : true,
      xfbml      : true,
      version    : 'v2.4'
    });
  };
});

Template.registerHelper('fbLikeConfig', function() {
  return {href: 'http://anakiklotetrise.herrco.gr', colorscheme: 'dark'}
});

Template.socialBar.rendered = function() {
  try {
    FB.XFBML.parse();
  } catch(e) {}
};
