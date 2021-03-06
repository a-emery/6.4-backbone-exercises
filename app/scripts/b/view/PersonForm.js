
export default Backbone.View.extend({

  tagName: 'form',

  className: 'bForm',

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
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    console.log(
      'First Name: ' + result.firstName + '\n' +
      'Last Name: ' + result.lastName + '\n' +
      'Address: ' + result.address + '\n' +
      'Phone Number: ' + result.phoneNumber
    );
    return result;
  }


});
