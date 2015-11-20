Template.navigation.helpers({
  navMenuOpen: function() {
    return Session.get('navMenuOpen');
  }
});

Template.navigation.events({
  "click #menuToggle" : function(e) {
    e.preventDefault();

    var navIsOpenNow = Session.get('navMenuOpen');
    Session.set('navMenuOpen', !navIsOpenNow);
  },
  "click .wrapper" : function(e) {
    e.preventDefault();
    Session.set('navMenuOpen', false);
  }
});
