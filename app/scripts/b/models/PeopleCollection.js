import Person from 'b/models/Person';

export default Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronpersonpost'
});
