export default Backbone.View.extend({

  tagName: 'li',

  className: 'blog-list-item',

  events: {
    'click [data-behavior=show-post]': 'showPost',
  },

  template: JST['c/blogListItemHeader'],

  showTemplate: JST['c/blogListItem'],

  showPost: function(){
    $('.current-post').html(this.rerender().el);
  },

  rerender: function(){
    this.$el.html(this.showTemplate({
      model: this.model.toJSON()
      }));
    return this;
  },

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
      }));
    return this;
  }

});
