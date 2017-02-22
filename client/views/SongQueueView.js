// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  collection: SongQueue,

  tagName: 'table',

  initialize: function() {
    this.collection.on('add', function(song) {
      this.render();
    }, this);

    this.collection.on('dequeue', function(song) {
      this.render();
    }, this);

    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
