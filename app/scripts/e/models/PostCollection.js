import Post from 'e/models/Post';

export default Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronsbookmarks'
});
