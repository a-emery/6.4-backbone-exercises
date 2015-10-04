import BlogListItem from 'c/view/BlogListItem';
import BaseView from 'c/view/Base-view';

export default BaseView.extend({
  tagName: 'ul',

  render: function(){
    this.renderChildren();
    return this;
  },

  renderChildren: function(){
    this.collection.each(function(post){
      var postView = new BlogListItem({model: post});
        console.log('newest');
      self.$el.append(postView.render().el);
    });
  }
});
