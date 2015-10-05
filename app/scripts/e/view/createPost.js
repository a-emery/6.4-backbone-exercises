export default Backbone.View.extend({

  tagName: 'form',

  template: JST['e/createPost'],

  events: {
    'submit': 'createBlogPost'
  },

  createBlogPost: function(e){
    e.preventDefault();
    this.collection.create(this.serializeForm());
    this.$('input[type=text]').val('');
    this.$('textarea').val('');
  },

  serializeForm: function() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    return result;
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

});
