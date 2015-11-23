Template.minileader.helpers({
  topUsers: function() {
    return Entries.find({},{sort: {'score': -1, limit: 5}});
  }
});
