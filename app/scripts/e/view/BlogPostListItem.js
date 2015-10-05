export default Backbone.View.extend({

  tagName: 'li',

  template: JST['e/blogPostListItem'],

  events: {
    'click [data-behavior=deletePost]': 'delete'
  },

  delete: function(){
    this.model.destroy({success: console.log('success')});
  },

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
      }));
    return this;
  }
});
