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
