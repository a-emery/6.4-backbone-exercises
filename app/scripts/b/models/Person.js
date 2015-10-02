var Person = Backbone.Model.extend({
  default: {
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: ""
  }
});

export default Person;
