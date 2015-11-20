Meteor.methods({
  initializeEntry: function() {
    var entry = Entries.findOne({userId: Meteor.userId()});
    var profile = {};

    if (!entry) {
      Entries.insert({userId: Meteor.userId(), score: 0});
      entry = Entries.findOne({userId: Meteor.userId()});
    }

    if (!entry.name) {
      profile.name = Meteor.user().services.facebook.name;
    }
    if (!entry.email) {
      profile.email = Meteor.user().services.facebook.email;
    }

    if (!entry.facebookId) {
      profile.facebookId = Meteor.user().services.facebook.id;
    }

    if (!_.isEmpty(profile)) {
      Entries.update(entry._id, {$set: profile});
    }

    return Entries.findOne({userId: Meteor.userId()});
  }
});
