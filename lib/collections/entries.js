Entries = new Mongo.Collection('entries')

Entries.allow({
  insert: function(userId, doc) {
    var unique = uniqueEntry(userId, doc);
    return (userId && doc.userId === userId);
  },
  update: function (userId, doc, fields, modifier) {
    return (userId && doc.userId === userId);
  },
  remove: function (userId, doc) {
    return (userId && doc.userId === userId);
  }
});

if (Meteor.isServer) {
  Meteor.publish('myEntry', function(userId) {
    return Entries.find({userId: userId});
  });
  Meteor.publish('entries', function(userId) {
    return Entries.find({},{sort: {score: -1}},{limit: 50});
  });

} else {
  Tracker.autorun(function() {
    Meteor.subscribe('myEntry', Meteor.userId());
    Meteor.subscribe('entries', Meteor.userId());
  });
}

function uniqueEntry(userId, doc) {
  return Entries.find({userId: userId}).count() == 0;
}
