Meteor.methods({
  facebookAppId: function() {
    if (!process.env.FACEBOOK_APP_ID) {
      throw new Meteor.Error('No facebookAppId is set!');
    }
    return process.env.FACEBOOK_APP_ID;
  }
});
