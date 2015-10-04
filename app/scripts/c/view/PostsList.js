import PostsCollection from 'c/models/PostsCollection';
import PostItemView from 'c/view/PostItemView';

export default Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

  tagName: 'ul',

  className: 'c-blog-list',

  template: JST['c/blogListItem'],

  render: function(){
    this.renderChildren();
    return this;
  },

  renderChildren: function(){
    var self = this;
    this.$el.html('');
    this.collection.each(function(post){
      var postItemView = new PostItemView({model: post});
      self.$el.append(postItemView.render().el);
    });
  }

});
