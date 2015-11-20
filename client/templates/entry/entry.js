Template.registerHelper('entry', function() {
  var entry = Entries.findOne({userId: Meteor.userId()});
  return entry;
})

AutoForm.hooks({
  entryForm: {
    onSubmit: function(data) {
      this.event.preventDefault();

      var profile = Entries.findOne({userId: Meteor.userId()});
      var profileId = profile._id;
      delete profile._id;

      var dataKeys = _.keys(profile);

      for (var i in _.keys(data)) {
        var key = _.keys(data)[i];
        profile[key] = data[key];
      }
      var af = this;

      Entries.update({_id: profileId}, {$set: profile}, function(error, docs) {
        if (error) {
          af.done(new Meteor.Error("User profile update failed"));
        }
        af.done(Router.go('game'));
      });

      return false;
    }
  }
});
