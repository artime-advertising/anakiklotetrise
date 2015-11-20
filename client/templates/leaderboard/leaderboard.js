Template.leaderboard.helpers({
  entries: function() {
    return Entries.find({}, {sort: {'score': 1}, limit: 50})
  }
});
