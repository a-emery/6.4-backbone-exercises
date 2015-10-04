export default Backbone.View.extend({

  tagName: 'form',

  events: {
    'submit': 'createUrl'
  },

  template: JST['d/createURL'],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createUrl: function(e){
    e.preventDefault();
    this.collection.create(this.serializeForm());
    this.$('input[type=text]').val('');
  },

  serializeForm: function() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    return result;
  }
});
