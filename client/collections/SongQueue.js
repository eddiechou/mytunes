// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      } 
    }, this);

    this.on('ended', function() {
      this.remove(this.models[0]);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      if (this.at(0) === song) {
        this.playNext();
      } else {
        this.remove(song);
      }
    }, this);
  },
  playFirst: function() {
    this.models[0].play();
  },

  playNext: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  }


});