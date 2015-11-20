Template.registerHelper('fbImage', function(params) {
  var facebookId = params.hash.facebookId;
  var size = params.hash.size || 'normal';
  var url = 'http://graph.facebook.com/v2.5/' + facebookId + '/picture?type=' + size;
  return url;
});
