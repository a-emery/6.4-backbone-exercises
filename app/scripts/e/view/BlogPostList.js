import BlogPostListItem from 'e/view/BlogPostListItem';

export default Backbone.View.extend({

  tagName: 'ul',

  className: '',

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
    this.collection.each(function(post){
      var blogPostListItem = new BlogPostListItem({model: post});
      self.$el.append(blogPostListItem.render().el);
    });
  },

});
