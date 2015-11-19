var CreatePostForm = Backbone.View.extend({

  tagName: 'form',

  events: {
    'submit': 'createBlogPost'
  },

  template: JST['a/form'],

  render: function(){
    this.$el.html(this.template());
    return this;
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
    console.log(
      'Blog Title: ' + result.title + '\n' +
      'Blog Post: ' + result.post
    );
    return result;
  },

});

export default CreatePostForm;
