export default Backbone.View.extend({

  tagName: 'li',

  className: 'blog-list-item',

  events: {
    'click [data-behavior=show-post]': 'showPost',
  },

  template: JST['c/blogListItem'],

  showPost: function(){
    $('.current-post').html(this.render().el);
  },

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
      }));
    return this;
  }

});
