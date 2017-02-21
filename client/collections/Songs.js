// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('enqueueSignalToLibrary', function(event) {
      this.collection.each(function(song, index) {
        if (song === event.songName) {
          this.trigger('enqueueToApp', {index: index});
        }
      });
    });
  }

});