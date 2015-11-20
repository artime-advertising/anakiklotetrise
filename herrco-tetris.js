if (Meteor.isClient) {
  Template.registerHelper("Schemas", Schema);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
