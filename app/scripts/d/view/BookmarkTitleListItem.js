export default Backbone.View.extend({

  template: JST['d/URLListItem'],

  tagName: 'li',

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
      }));
    return this;
  }

});
