Router.configure({
  layoutTemplate: 'ScreenLayout'
});

Router.route('/', function () {
    this.render('welcome', { });
    this.layout('DefaultLayout');
  },
  { name: 'welcome' }
);

Router.route('/entry', function () {
  this.render('entry', { });
});

Router.route('/game', function () {
  this.render('game', { });
});

Router.route('/highscores', function () {
  this.render('leaderboard', { });
});

Router.onAfterAction(function() {
  if (Meteor.isClient) {
    Session.set('navMenuOpen', false);
  }
})

var authenticate = function() {
  if (!Meteor.user()) {
    this.redirect('/');
  } else {
    this.next();
  }
}

Router.onBeforeAction(authenticate, {
  except: ['welcome', 'highscores']
});
