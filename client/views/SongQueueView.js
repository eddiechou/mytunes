// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  model: SongQueue,

  initialize: function() {
    this.render();
  },

  render: function() {
    console.log(this);
    this.$el.children().detach();


    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
