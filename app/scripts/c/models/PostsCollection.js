import Post from 'c/models/Post';

export default Backbone.Collection.extend({
  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronblogposts'
});
