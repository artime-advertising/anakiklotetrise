Template.welcome.events({
  'click #login': function(event) {
    if (!Meteor.user()) {
      Meteor.loginWithFacebook({}, function(err) {
        if (err) {
          throw new Meteor.Error("Facebook login failed");
        }
        Meteor.call('initializeEntry', function(error, entry) {
          if (!entry.address) {
            Router.go('entry');
          } else {
            Router.go('game');
          }
        });
      });
    } else {
      Meteor.call('initializeEntry', function(error, entry) {
        if (!entry.address) {
          Router.go('entry');
        } else {
          Router.go('game');
        }
      });
    }
  },

  'click #logout': function(event) {
    Meteor.logout(function(err) {
      if (err) {
        throw new Meteor.Error("Logout failed");
      }
    })
  }
});
