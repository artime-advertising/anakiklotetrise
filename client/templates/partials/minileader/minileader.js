Template.minileader.helpers({
  topUsers: function() {
    return Entries.find({}, {sort: {'score': -1}, limit: 5, transform: function(doc) {
      var fullName = doc.fullName.split(' ');
      doc.name = fullName[0] + ' ' + fullName[1][0] + '.';
      return doc;
    }});
  }
});
