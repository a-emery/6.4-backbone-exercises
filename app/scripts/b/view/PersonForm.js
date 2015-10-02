
export default Backbone.View.extend({

  tagName: 'form',

  template: JST['b/form'],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  events: {
    'submit': 'createPerson'
  },

  createPerson: function(e){
    e.preventDefault();
    this.collection.create(this.serializeForm());
    this.$('input[type=text]').val('');
  },

  serializeForm: function(){
    console.log('something');
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    return result;
  }


});
