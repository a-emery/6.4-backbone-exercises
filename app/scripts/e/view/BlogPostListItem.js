export default Backbone.View.extend({

  tagName: 'li',

  template: JST['e/blogPostListItem'],

  events: {
    'click [data-behavior=deletePost]': 'delete'
  },

  delete: function(){
    var result = this.model.destroy({success: function(){console.log('destroy')}});
    console.log(result);
  },

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
      }));
    return this;
  }
});
