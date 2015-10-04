export default Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    url: "",
    title: "",
    tag: ""
  }
});
