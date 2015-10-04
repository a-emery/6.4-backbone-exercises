import BookmarkTitleListItem from 'd/view/BookmarkTitleListItem';

export default Backbone.View.extend({

  tagName: 'ul',

  className: 'bookmark-title-list',

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function(){
    this.renderChildren();
    return this;
  },

  renderChildren(){
    var self = this;
    this.$el.html('');
    this.collection.each(function(bookmark){
      var bookmarkTitleListItem = new BookmarkTitleListItem({model: bookmark});
      self.$el.append(bookmarkTitleListItem.render().el);
    });
  },

});
