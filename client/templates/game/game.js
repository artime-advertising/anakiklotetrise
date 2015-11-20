Template.game.onCreated(function() {
  this.currentScore = new ReactiveVar(0);
});

Template.game.onRendered(function(){
  var self = this;
  var entry = Entries.findOne({userId: Meteor.userId()});

  $('#tetrisoid').blockrain({
    playText: 'Είσαι έτοιμος;',
    playButtonText: 'Παίξε!',
    gameOverText: 'Δεν πειράζει! Ξαναπαίξε!',
    restartButtonText: 'Παίξε Ξανά!',
    scoreText: null,
    blockWidth: 10,
    autoBlockWidth: false,
    theme: {
      background: '#040304',
      backgroundGrid: '#111',
      complexBlocks: {
        line:     '/images/blocks/line.png',
        square:   '/images/blocks/square.png',
        arrow:    '/images/blocks/arrow.png',
        rightHook:'/images/blocks/rightHook.png',
        leftHook: '/images/blocks/leftHook.png',
        rightZag: '/images/blocks/rightZag.png',
        leftZag:  '/images/blocks/leftZag.png'
      }
    },

    onStart: function(){
      this.blockrain('controls', true);
      this.find('.blockrain-score-holder').remove();
      var md = new MobileDetect(window.navigator.userAgent);
      if (md.mobile() != null) {
        this.blockrain('touchControls', true);
      }
      self.currentScore.set(0);
    },
    onRestart: function(){
      self.currentScore.set(0);
    },
    onGameOver: function(score){
      var playerScore = entry.score;
      if (score > playerScore) {
        Entries.update(entry._id, {$set: {'score': score}})
      }
    },
    onLine: function(lines, scoreIncrement, score) {
      self.currentScore.set(score);
    }
  });
});

Template.game.helpers({
  currentScore: function() {
    return Template.instance().currentScore.get();
  }
});
