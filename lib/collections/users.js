Meteor.users.allow({
  update: function (userId, user, fields, modifier) {
    // can only change your own documents
    if(user._id === userId)
    {
      // Meteor.users.update({_id: userId}, modifier);
      return true;
    }
    else return false;
  }
});

if (Meteor.isServer) {
  // Meteor.publish('topUsers', function() {
  //   return Meteor.users.find({}, {sort: {'profile.score': 1}, fields: {'profile.name': 1, 'services.facebook.id': 1, 'profile.score': 1}, limit: 50});
  // });

} else {
  // Meteor.subscribe('topUsers');
}
